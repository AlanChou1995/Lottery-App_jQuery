$(() => {
    let userChooseNumber = new Set();
    let userNumber = [];
    let result = [];
    let doneStatus = false;
    let gameStatus = false;
    const randomResult = () => {
        for (let i = 1; i <= 6; i++) {
            let x = (Math.floor(Math.random() * 49) + 1).toString();
            let h = x < 10 ? '0' + x : x;
            if (result.includes(h)) {
                i--;
                continue;
            } else {
                result.push(h);
            }
        }
        return result;
    }
    const randomUserNumber = () => {
        for (let i = 1; i <= 6; i++) {
            let x = (Math.floor(Math.random() * 49) + 1).toString();
            let h = x < 10 ? '0' + x : x;
            if (userNumber.includes(h)) {
                i--;
                continue;
            } else {
                userNumber.push(h);
            }
        }
        return userNumber.sort((a, b) => a - b).join(' , ');
    }
    $('td').click(function (e) {
        if (doneStatus && !gameStatus) {
            return alert(`請點選重選`);
        }
        if (doneStatus && gameStatus) {
            return alert(`請點選重選`);
        }
        if (userChooseNumber.size > 5 && !userChooseNumber.has(e.target.textContent)) {
            alert('已超過可選數字')
        }
        else if (userChooseNumber.has(e.target.textContent)) {
            userChooseNumber.delete(e.target.textContent)
            $(this).css({
                background: '',
            })
        }
        else if (!userChooseNumber.has(e.target.textContent)) {
            userChooseNumber.add(e.target.textContent)
            $(this).css({
                background: 'rgb(162, 135, 62)',
            })
        }

        //test
        console.log(userChooseNumber)
    })

    $('#done').click(function () {
        if (doneStatus) {
            return alert(`請點選重選`);
        }
        if (userChooseNumber.size < 6) {
            alert(`至少選取六位數字`)
        } else {
            userChooseNumber.forEach((value) => {
                userNumber.push(value);
            })
            $('#userChoose').text(`自選號碼：
            ${userNumber.sort((a, b) => a - b).join(' , ')}`)
            randomResult();
            $('td').css({
                background: '',
            })
            doneStatus = true;
            gameStatus = false;
        }

        //test
        console.log(`doneStatus = ${doneStatus}`)
        console.log(`gameStatus = ${gameStatus}`)
        console.log(`result = ${result}`);
        console.log(`userNumber = ${userNumber}`)
        console.log(`userChooseNumber = ${userChooseNumber.size}`)
    })

    $('#bet').click(function () {
        if (gameStatus) {
            return alert(`請重新開始`)
        }
        else if (doneStatus === false) {
            return alert(`請先點選下注`)
        }
        else {
            $('#betNumber').text(`開獎號碼：
            ${result.sort((a, b) => a - b).join(' , ')}`)
            $('td').css({
                background: '',
            })
            userNumber.map((item) => {
                if (result.includes(item)) {
                    $('#repeatNumber').text(`
                        中獎號碼：${item}
                    `)
                }
            })
            userNumber = [];
            userChooseNumber.clear();
            result = [];
            doneStatus = true;
            gameStatus = true;
        }

        //test
        console.log(`doneStatus = ${doneStatus}`)
        console.log(`gameStatus = ${gameStatus}`)
        console.log(`result = ${result}`);
        console.log(`userNumber = ${userNumber}`)
    })

    $('#reset').click(function () {
        userChooseNumber.clear();
        userNumber = [];
        result = [];
        doneStatus = false;
        gameStatus = false
        $('td').css({
            background: '',
        })
        $('#userChoose').text('');
        $('#betNumber').text('');
        $('#repeatNumber').text('');
        $('#autoChoose').text('');

    })

    $('#autoRandom').click(function () {
        if (doneStatus !== false) {
            return alert(`請點選重選`)
        } else {
            $('#autoChoose').text(`電腦選號：
            ${randomUserNumber()}`)
            randomResult();
            $('td').css({
                background: '',
            })
            doneStatus = true;
            gameStatus = false
            userChooseNumber.clear();
        }

        //test
        console.log(`doneStatus = ${doneStatus}`)
        console.log(`gameStatus = ${gameStatus}`)
        console.log(`result = ${result}`);
        console.log(`userNumber = ${userNumber}`)
    })
})
