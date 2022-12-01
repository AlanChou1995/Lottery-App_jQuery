$(() => {
    let userChooseNumber = new Set();
    let userNumber = [];
    let result = [];
    const random = () => {
        for (let i = 1; i <= 6; i++) {
            let x = Math.floor(Math.random() * 49) + 1;
            if (result.includes(x.toString())) {
                i--;
                continue;
            } else if (x < 10) {
                result.push('0' + x)
            } else {
                result.push(x.toString());
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
        console.log(userChooseNumber);
        console.log(result.length)
    })

    $('#done').click(function () {
        if (userChooseNumber.size < 6) {
            alert(`至少選取六位數字`)
        } else {
            userChooseNumber.forEach((value) => {
                userNumber.push(value);
            })
            $('#userChoose').text(`自選號碼：${userNumber.sort((a, b) => a - b).join(' , ')}`)
        }
        console.log(userNumber)
    })

    $('#bet').click(function () {
        if (userChooseNumber.size < 6) {
            alert('請先選取號碼下注')
        } else {
            $('#betNumber').text(`開獎號碼：${random()}`)
            console.log(result);
            result = [];

        }

    })

    $('#reset').click(function () {
        userChooseNumber;
        userNumber = [];
        console.log(userChooseNumber);
        console.log(userNumber)
    })


    /*
        1.下注後清空 userNumber && table數字
        2.隨機選好功能
        3.重選清空所有功能
        4.兌獎後清空 userNumber && userChooseNumber && result && table數字 
          並 return 比對後中幾組數字及獲得幾獎 
    */

})
