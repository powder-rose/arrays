// 3
// Напишите функцию, которая очищает массив от нежелательных значений, 
// таких как false, undefined, пустые строки, ноль, null.
// Ожидаемый результат: 
// [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]

a = [0, 1, false, 2, undefined, '', 3, null]

const filterArr = (arr) => {
    const newArr = []
    for (i of arr) {
        if (typeof i === 'number' && i != 0) {
            newArr.push(i)
        }
    }
  return newArr
}

console.log(filterArr(a))