// 5
// Напишите функцию, возвращает новый массив без предоставленных значений.
// Ожидаемый результат: [1, 2, 3, 1, 2] без 1, 2 => [3]

const getArr = (arr, acc1, acc2) => {
    const newArr = []
    for (let i of arr ){
        if (i !== acc1 && i !== acc2) {
            newArr.push(i)
        }
    }
    return newArr
}

console.log(getArr([1, 2, 3, 1, 2], 1, 2))