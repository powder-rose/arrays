// 10
// Напишите функцию, которая создаст массив из уникальных значений, 
// которые есть в каждом из предоставленных массивов.
// Ожидаемый результат: 
// ([1, 2], [2, 3]) => [2]
// (['a', 'b'], ['b', 'c'], ['b', 'e', 'c']) => ['b']

const getUnique = (arr) => {
    let newArr = []
    let result = arr.reduce((acc, item) => {
        if (!acc.includes(item)) {
            newArr.push(acc)
        }
    })
  
    return newArr
}

console.log(getUnique(['a', 'b'], ['b', 'c'], ['b', 'e', 'c']))