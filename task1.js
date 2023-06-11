// Заполните массив следующим образом: в первый элемент запишите '1', 
// во второй '22', в третий '333' и так далее.

const getArr = (num) => {
    let arr = []

    for (let i = 1; i <= num; i++) {
        result = ''
        for (let x = 0; x < i; x++) {
            result += i
        }
        arr.push(result)
    }
    return arr
}

    console.log(getArr(4))