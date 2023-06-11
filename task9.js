// 9
// Напишите функцию, которая разделяет массив на части заданного размера.
// Ожидаемый результат: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]

const divideArr = (arr, num) => {
let newArr = []
for (let i = 0; i < arr.length; i++) {
    newArr.push(arr.slice(i, num + i))
   i++
}
return newArr
}

console.log(divideArr([1, 2, 3, 4, 5], 2))