// function without parameter,  a function which make a number square
function square() {
    let num = 2;
    let sq = num * num;
    console.log(sq);
}
square(); //4

// function without parameter
function addTwoNumbers() {
    let numOne = 10;
    let numTwo = 20;
    let sum = numOne + numTwo;
    console.log(sum);
}
addTwoNumbers(); // a function has to be called by its name to be executed

function printFullName() {
    let firstName = "Asabeneh";
    let lastName = "Yetayeh";
    let space = " ";
    let fullName = firstName + space + lastName;
    console.log(fullName);
}

printFullName(); // calling a function
function fullName() {
    let firstName = "Hamid";
    let lastName = "Raza";
    let space = " ";
    let fullName = firstName + space + lastName;
    return fullName;
}
console.log(fullName());

function addTwoNumbers() {
    let numOne = 2;
    let numTwo = 3;
    let total = numOne + numTwo;
    return total;
}

console.log(addTwoNumbers());
function areaOfCircle(r) {
    let area = Math.PI * r * r;
    return area;
}

console.log(areaOfCircle(10)); // should be called with one argument

function square(number) {
    return number * number;
}

console.log(square(10));

function addTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo;
    return sum;
}
console.log(addTwoNumbers(10, 20)); // calling functions
// If a function doesn't return it doesn't store data, so it should return

function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo;
    return sum;
}

console.log(sumTwoNumbers(10, 20));

function printFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
console.log(printFullName("Asabeneh", "Yetayeh"));

function sumOfArraysValues(arr) {
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
let num = [1, 2, 3, 4, 5];
console.log(sumOfArraysValues(num));

// Unlimited Parameters
// Let us access the arguments object

function sumAllNums() {
    console.log(arguments);
}

sumAllNums(1, 2, 3, 4);
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

function sumAllNums() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(sumAllNums(1, 2, 3, 4)); // 10
console.log(sumAllNums(10, 20, 13, 40, 10)); // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40)); // 173

// Unlimited parameters by using arrow function
const sumAllNum = (...args) => {
    console.log(args);
};
sumAllNum(1, 2, 3, 4);
// [1, 2, 3, 4]

// function declaration

const sumAllNumber = (...args) => {
    let sum = 0;
    for (const element of args) {
        sum += element;
    }
    return sum;
};

console.log(sumAllNumber(1, 2, 3, 4)); // 10
console.log(sumAllNumber(10, 20, 13, 40, 10)); // 93
console.log(sumAllNumber(15, 20, 30, 25, 10, 33, 40)); // 173

// Anonymous function or without name function
const anonymousFun = function () {
    console.log(
        "I am an anonymous function and my value is stored in anonymousFun"
    );
};

// Expression function
// Function expression
const squ = function (n) {
    return n * n
}

console.log(squ(2)) // -> 4

// Invoking Function
// (function(n) {
//     console.log(n * n)
//   })(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below

let squaredNum = (function (n) {
    return n * n
})(10)

console.log(squaredNum)
// ============== Arrow Function ==========
// This is how we write normal or declaration function
// Let us change this declaration function to an arrow function
function sqr(n) {
    return n * n
}
console.log(sqr(2)) // 4

// In Arrow Function
const sqring = n => {
    return n * n
}
console.log(sqring(12)) // -> 144

// if we have only one line in the code block, it can be written as follows, explicit return
const squa = n => n * n  // -> 4
console.log(squa(2))

const changeToUpperCase = arr => {
    const newArr = []
    for (const element of arr) {
        newArr.push(element.toUpperCase())
    }
    return newArr
}

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries))

// ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

const completeName = (fName, lName) => {
    return `${fName} ${lName}`
}
console.log(completeName("Hamid", "Raza"))
const printFull = (fName, lName) => `${fName} ${lName}`
console.log(printFull("Qasad", "Raza"))
// Default parameters
function greetings(name = 'Peter') {
    let message = `${name}, welcome to 30 Days Of JavaScript!`
    return message
}

console.log(greetings())
console.log(greetings('Asabeneh'))

function generateFullName(firstName = 'Asabeneh', lastName = 'Yetayeh') {
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}

console.log(generateFullName())
console.log(generateFullName('David', 'Smith'))

function calculateAge(birthYear, currentYear = 2019) {
    let age = currentYear - birthYear
    return age
}

console.log('Age: ', calculateAge(1819))

function weightOfObject(mass, gravity = 9.81) {
    let weight = mass * gravity + ' N' // the value has to be changed to string first
    return weight
}

console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon

// Default Parameter by using arrow function
const greeting = (name = 'Peter') => {
    let message = name + ', welcome to 30 Days Of JavaScript!'
    return message
}

console.log(greeting())
console.log(greeting('Asabeneh'))

const generateFullNam = (firstName = 'Asabeneh', lastName = 'Yetayeh') => {
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}

console.log(generateFullNam())
console.log(generateFullNam('David', 'Smith'))

const calculateAg = (birthYear, currentYear = 2019) => currentYear - birthYear
console.log('Age: ', calculateAg(1819))

const weightOfObjec = (mass, gravity = 9.81) => mass * gravity + ' N'

console.log('Weight of an object in Newton: ', weightOfObjec(100)) // 9.81 gravity at the surface of Earth
console.log('Weight of an object in Newton: ', weightOfObjec(100, 1.62)) // gravity at surface of Moon