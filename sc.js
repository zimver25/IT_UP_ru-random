function random_math(min, max, count=1) {
    for(let i = 1; i<=count; i++){
        min = Math.ceil(min)
        max = Math.floor(max)
        let num1 = Math.floor(Math.random() * (max - min + 1) + min)
        let num2 = Math.floor(Math.random() * (max - min + 1) + min)
        let result = +prompt('решите ' + i + ' пример ' + num1 + ' + ' + num2 + ' = ?')
        if(!isNaN(result)){alert('решение ' + num1 + ' + ' + num2 + ' = ' + (num1 + num2) + ' ваш ответ ' + result)}
        else{alert('вы указали не число')}
    }
}

random_math(1, 10, 10)