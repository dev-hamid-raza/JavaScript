// Callback ----------
// a callback function, the name of the function could be any name
const callback = (n) => {
    return n ** 2
}

// function that takes other function as a callback
function cube(callback, n) {
    return callback(n) * n
}

console.log(cube(callback, 3))


// Returning Faction--------
// Higher order function returning an other function
const higherOrder = n => {
    const doSomething = m => {
        const doWhatEver = t => {
            return 2 * n + 3 * m + t
        }
        return doWhatEver
    }
    return doSomething
}
console.log(higherOrder(2)(3)(10))

// Let us see were we use call back functions. For instance the forEach method uses call back.

const numbers = [1, 2, 3, 4, 5]
const sumArray = arr => {
  let sum = 0
  const callback = function(element) {
    sum += element
  }
  arr.forEach(callback)
  return sum

}
console.log(sumArray(numbers))

// The above example can be simplified as follows:

const numbersTwo = [1, 2, 3, 4]
const sumArrayTwo = arr => {
  let sum = 0
  arr.forEach(function(element) {
    sum += element
  })
  return sum

}
console.log(sumArrayTwo(numbers))

// Setting Interval using a setInterval function
function sayHello() {
  console.log('Hello')
}
// setInterval(sayHello, 1000) // it prints hello in every second, 1000ms is 1s

// Setting a time using a setTimeout
function say_Hello() {
  console.log('Hello')
}
// setTimeout(say_Hello, 2000) // it prints hello after it waits for 2 seconds.


// Functional Programming
// Iterating Array by using forEach function
let sum = 0;
const numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach(num => console.log(num))
numbers2.forEach(num => sum += num)
console.log(sum)
let mul = 1
numbers2.forEach(num => mul *= num)
console.log(mul)

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]
// countries.forEach(element => console.log(element.toUpperCase()))
const cap = (element) => {
  console.log(element.toUpperCase())
}
countries.forEach(cap)

// Iterating array by using map function
/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/
//Example
// const numbers = [1, 2, 3, 4, 5] >>> Already Declare above
const numbersSquare = numbers.map(num => num * num)

console.log(numbersSquare)

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log(namesToUpperCase)

// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya',
// ]

// Already Declare Above------
const countriesToUpperCase = countries.map((element) => element.toUpperCase())


// Arrow function
// const countriesToUpperCase = countries.map((country) => {
//   return country.toUpperCase();
// })

//Explicit return arrow function
// const countriesToUpperCase = countries.map(country => country.toUpperCase());
console.log(countriesToUpperCase)

const countriesFirstThreeLetters = countries.map((country) =>
  country.toUpperCase().slice(0, 3)
) 
console.log(countriesFirstThreeLetters) //["ALB", "BOL", "CAN", "DEN", "ETH", "FIN", "GER", "HUN", "IRE", "JAP", "KEN"]
// Array iterating using Filter function
//Filter countries containing land
const countriesContainingLand = countries.filter((country) =>
  country.includes('land')
)
console.log(countriesContainingLand) //['Finland', 'Ireland']
// Filter countries end by ia
const countriesEndsByia = countries.filter((country) => country.endsWith('ia'))
console.log(countriesEndsByia)  //['Albania', 'Bolivia','Ethiopia']
// Filter countries name having  5 characters
const countriesHaveFiveLetters = countries.filter(
  (country) => country.length === 5
)
console.log(countriesHaveFiveLetters)

const scores = [
  { name: 'Asabeneh', score: 95 },
  { name: 'Lidiya', score: 98 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]
// Getting Score above the 80
const scoresGreaterEighty = scores.filter((element) => element.score >= 80)
console.log(scoresGreaterEighty) //[{name: 'Asabeneh', score: 95}, { name: 'Lidiya', score: 98 },{name: 'Martha', score: 85},{name: 'John', score: 100}]
// Reduce method
// const numbers = [1, 2, 3, 4, 5] Already Declare above
const sum2nd = numbers.reduce((acc, cur) => acc + cur, 0)

console.log(sum2nd) //15

const evenNumbersSum = numbers.reduce((total,num) =>  total + (num % 2 === 0 ? num : 0) , 0)
console.log(evenNumbersSum) // 6

// every: Check if all the elements are similar in one aspect. It returns boolean
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'] Already Declare
const areAllStr = names.every((name) => typeof name === 'string') // Are all strings?

console.log(areAllStr) // true

const bools = [true, true, true, true]
const areAllTrue = bools.every((b) => b === true)
console.log(areAllTrue) //true

// find: Return the first element which satisfies the condition
const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log(age)  //18
// finding the name which length Greater than 7 
const result = names.find((name) => name.length > 7 )
console.log(result)

// finding score
const newScore = scores.find((user) => user.score > 80)
console.log(newScore)

// findIndex: Return the position of the first element which satisfies the condition
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const ages = [24, 22, 25, 32, 35, 18]

const newResult = names.findIndex((name) => name.length > 7)
console.log(newResult) // 0

const newAge = ages.findIndex((age) => age < 20)
console.log(newAge) // 5
// some: Check if some of the elements are similar in one aspect. It returns boolean
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const bools = [true, true, true, true]

const areSomeTrue = bools.some((b) =>  b === true)

console.log(areSomeTrue) //true

const NewAreAllStr = names.some((name) => typeof name === 'number') // Are all strings ?
console.log(NewAreAllStr) // false

// Sorting string values by "Sort" Method
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array  is also sorted
// Numbers Sorting
const numbers1 = [9.81, 3.14, 100, 37]
// Using sort method to sort number items provide a wrong result. see below
console.log(numbers1.sort()) //[100, 3.14, 37, 9.81]
numbers1.sort(function (a, b) {
  return a - b
})

console.log(numbers1) // [3.14, 9.81, 37, 100]

numbers1.sort(function (a, b) {
  return b - a
})
console.log(numbers1) //[100, 37, 9.81, 3.14]

const users = [
  { name: 'Asabeneh', age: 150 },
  { name: 'Brook', age: 50 },
  { name: 'Eyob', age: 100 },
  { name: 'Elias', age: 22 },
]
users.sort((a, b) => {
  if (a.age < b.age) return -1
  if (a.age > b.age) return 1
  return 0
})
console.log(users) // sorted ascending
// [{…}, {…}, {…}, {…}]