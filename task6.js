// 6
// Напишите функцию, которая убирает повторяющиеся значения.
// Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]

const removeRepl = (arr) => {
   return arr.filter((el, i, arr) => arr.indexOf(el) === i)
}

console.log(removeRepl([1, 2, 3, 1, 2, 6, 6]))