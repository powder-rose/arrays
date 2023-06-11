// 4
// Напишите функцию, которая возвращает объект, составленный из 
// значений вложенных массивов. Первое элемент массива - ключ, 
// второй - зачение.
// Ожидаемый результат: [['a', 1], ['b', 2]] => { a: 1, b: 2 }

const getObject = (arr) => {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i][0]] = arr[i][1]
    }
    return obj
}

console.log(getObject([['a', 1], ['b', 2], ['c', 3]]))