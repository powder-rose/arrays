// 8
// Напишите функцию, которая преобразует глубокий массив в одномерный.
// Задачу нужно решить двумя способами!
// Ожидаемый результат: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]

// const convertArray = (arr) => {
// const newArr = arr.reduce((arr, x) => arr.concat(x).flat(), [])
// return newArr
// }



// const convertArray = (arr) => {
//     let newArr = []
//     for (let i = 0; i <= arr.length; i++) {
//         newArr = arr.flat(2) 
//     }
//     return newArr
// }

console.log(convertArray([1, 2, [3, 4, [5]]]))