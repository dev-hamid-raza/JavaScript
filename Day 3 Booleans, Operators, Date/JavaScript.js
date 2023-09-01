console.log("Checking")

let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let trueValue = 4 > 3    // true
let falseValue = 4 < 3  // false
console.log(isLightOn)
console.log(isRaining)
console.log(isHungry)
console.log(isMarried)
console.log(trueValue)
console.log(falseValue)
// Undefined ...
let firstName
console.log(firstName) //not defined, because it is not assigned to a value yet
// Null Values 
let empty = null
console.log(empty) // -> null , means no value

// Assignment Operator
// An equal sign in JavaScript is an assignment operator. It uses to assign a variable.

// let firstName = 'Asabeneh'
let country = 'Finland'
// Arithmetic Operator
let numOne = 4
let numTwo = 3
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo

console.log(sum, diff, mult, div, remainder, powerOf) // 7,1,12,1.33,1, 64

const PI = 3.14
let radius = 100          // length in meter

//Let us calculate area of a circle
const areaOfCircle = PI * radius * radius
console.log(areaOfCircle)  //  314 m


const gravity = 9.81      // in m/s2
let mass = 72             // in Kilogram

// Let us calculate weight of an object
const weight = mass * gravity
console.log(weight)        // 706.32 N(Newton)

const boilingPoint = 100  // temperature in oC, boiling point of water
const bodyTemp = 37       // body temperature in oC


// Concatenating string with numbers using string interpolation
/*
 The boiling point of water is 100 oC.
 Human body temperature is 37 oC.
 The gravity of earth is 9.81 m/s2.
 */
console.log(`The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`)
// comparison Operators
console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false
// Logical Operator
// && ampersand operator example

const check1 = 4 > 3 && 10 > 5         // true && true -> true
const check2 = 4 > 3 && 10 < 5         // true && false -> false
const check4 = 4 < 3 && 10 < 5         // false && false -> false

// || pipe or operator, example

const check5 = 4 > 3 || 10 > 5         // true  || true -> true
const check6 = 4 > 3 || 10 < 5         // true  || false -> true
const check7 = 4 < 3 || 10 < 5         // false || false -> false

//! Negation examples

let check8 = 4 > 3                     // true
let check9 = !(4 > 3)                  //  false
let isLightOn1 = true
let isLightOff2 = !isLightOn           // false
let isMarried3 = !false                // true
// increment operator

// Pre-increment
let count1 = 0
console.log(++count1)        // 1
console.log(count1)          // 1
// Post-increment

let count2 = 0
console.log(count2++)        // 0
console.log(count2)          // 1

// Decrement Operator

// Pre-decrement

let count3 = 0
console.log(--count3) // -1
console.log(count3)  // -1
// Post-decrement

let count4 = 0
console.log(count4--) // 0
console.log(count4)   // -1

// Ternary Operator
let isRaining5 = true
isRaining5 
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
isRaining5 = false

isRaining5
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')

  let number = 5
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)
number = -5

number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)

//   Windows Methods
// alert()
// alert("Welcome 30 days of JavaScript")
// Windows Prompt Method
// prompt('required text', 'optional text')
// let number4 = prompt('Enter number', 'number goes here')
// console.log(number4)

// Windows Confirm Methods
// const agree = confirm('Are you sure you like to delete? ')
// console.log(agree) // result will be true or false based on what you click on the dialog box

// Date Object 
const now = new Date() // new keyword is used to create a new object (here we create the date object)
console.log(now) // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)
// Getting Full Year
console.log(now.getFullYear())
// Getting Month
console.log(now.getMonth()) // 2, because the month is March,  month(0-11)

// Let us format these values to a human readable time format. Example:

// const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56