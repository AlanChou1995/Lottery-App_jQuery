$(() => {
    let userChooseNumber = new Set();
    let userNumber = [];
    let result = [];
    let doneStatus = false;
    let gameStatus = false;
    if (!gameStatus == false && !doneStatus) {

    }
    const random = () => {
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
        return result.sort((a, b) => a - b).join(' , ');
    }
    $('td').click(function (e) {
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
            $('td').css({
                background: '',
            })
            doneStatus = true;
            gameStatus = false;
        }

        //test
        console.log(`doneStatus = ${doneStatus}`)
        console.log(`result = ${result}`);
        console.log(`userNumber = ${userNumber}`)
        console.log(`userChooseNumber = ${userChooseNumber.size}`)
    })

    $('#bet').click(function () {
        if (gameStatus) {
            return alert(`請重新開始`)
        }
        else if (doneStatus === false) {
            alert(`請先點選下注`)
        }
        else {
            $('#betNumber').text(`開獎號碼：
            ${random()}`)
            $('td').css({
                background: '',
            })
            userNumber = [];
            userChooseNumber = new Set();
            result = [];
            doneStatus = true;
            gameStatus = true;
        }

        //test
        console.log(`doneStatus = ${doneStatus}`)
        console.log(`gameStatus = ${gameStatus}`)
        console.log(`result = ${result}`);
        console.log(`userNumber = ${userNumber}`)
        console.log(`userChooseNumber = ${userChooseNumber.size}`)
    })

    $('#reset').click(function () {
        userChooseNumber = new Set();
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

        //test
        console.log(`doneStatus = ${doneStatus}`)
        console.log(`result = ${result}`);
        console.log(`userNumber = ${userNumber}`)
        console.log(`userChooseNumber = ${userChooseNumber.size}`)
    })

    $('#autoRandom').click(function () {
        if (doneStatus !== false) {
            return alert(`請點選重選`)
        } else {
            $('#autoChoose').text(`電腦選號：
            ${random()}`)
            doneStatus = true;
            gameStatus = false
            userNumber = [];
            result = [];
        }

        //test
        console.log(`doneStatus = ${doneStatus}`)
        console.log(`gameStatus = ${gameStatus}`)
        console.log(`result = ${result}`);
        console.log(`userNumber = ${userNumber}`)
        console.log(`userChooseNumber = ${userChooseNumber.size}`)
    })

    /*
        1.下注後清空 userNumber && table數字 不可繼續堆疊array
        2.隨機選好功能 {未完成}
        3.重選清空所有功能 {已完成}
        4.兌獎後清空 userNumber && userChooseNumber && result && table數字 
          並 return 比對後中幾組數字及獲得幾獎 
    */

})
