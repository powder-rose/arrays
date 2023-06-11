// Дан массив с числами. Узнайте сколько элементов с начала массива 
// надо сложить, чтобы в сумме получилось больше 10-ти.
let a = [5, 5, 4, 3]

const getNumbers = (arr) => {
    let count = 0
    let result = 0
  for (let i = 0; i < arr.length; i++) {
    result += arr[i]
    if (result <= 10) {
        count++
    }
  }
  return count
}

console.log(getNumbers(a))

