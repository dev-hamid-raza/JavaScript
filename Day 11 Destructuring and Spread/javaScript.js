// Destructuring Array 
const numbers = [1, 2, 3]
const [numOne, numTwo, numThree] = numbers
console.log(numOne, numThree, numThree)
const names = ['Hamid', 'Khan', 'Husnain']
const [firstName, secondName, thirdName] = names
console.log(firstName, secondName, thirdName)
const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants

console.log(e, pi, gravity, bodyTemp, boilingTemp)

const fullstack = [
    ['HTML', 'CSS', 'JavaScript', 'React'],
    ['Node', 'Express', 'Mongo']
]
const [frontEnd, backEnd] = fullstack
console.log(frontEnd, backEnd)

const numbersTwo = [4, 5, 6]
let [numFour, , numSix] = numbers //5 is omitted

console.log(numFour, numSix)
const friends = [undefined, 'Khan', 'Husnain']
const [
    firstFriend = 'Ahmad',
    secondFriend,
    thirdFriend,
    fourthFriend = 'Tayyab'
] = friends
console.log(firstFriend, secondFriend, thirdFriend, fourthFriend)

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3)
console.log(rest)
const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

for (const [country, city] of countries) {
    console.log(country, city)
}
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]

for (const [first, second, third] of fullStack) {
    console.log(first, second, third)
}
// destructuring Objects 
const rectangle = {
    width: 20,
    height: 10,
    area: 200
}
let { width, height, area, perimeter } = rectangle

console.log(width, height, area, perimeter)

// Renaming during structuring 
let { width: w, height: h, area: a, perimeter: p } = rectangle

console.log(w, h, a, p)

{ width, height, area, perimeter = 60 }

console.log(width, height, area, perimeter) //20 10 200 60
//Let us modify the object:width to 30 and perimeter to 80

// Object parameter without destructuring 
// Without destructuring
const rect = {
    width: 20,
    height: 10
}
const calculatePerimeter = rectangle => {
    return 2 * (rectangle.width + rectangle.height)
}

console.log(calculatePerimeter(rect)) // 60
//with destructuring

//Another Example
const person = {
    firstName: 'Hamid',
    lastName: 'Raza',
    age: 21,
    country: 'Pakistan',
    job: 'Instructor and Developer',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)']
}
// Let us create a function which give information about the person object without destructuring

const getPersonInfo = obj => {
    const skills = obj.skills
    const formattedSkills = skills.slice(0, -1).join(', ')
    const languages = obj.languages
    const formattedLanguages = languages.slice(0, -1).join(', ')

    let personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${obj.age
        } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${skills[skills.length - 1]
        }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

    return personInfo
}

console.log(getPersonInfo(person))

//   Object parameter with destructuring

const calculatePerimeter1 = ({ width, height }) => {
    return 2 * (width + height)
}

console.log(calculatePerimeter1(rect)) // 60

// Let us create a function which give information about the person object with destructuring
const getPersonInfo1 = ({
    firstName,
    lastName,
    age,
    country,
    job,
    skills,
    languages
}) => {
    const formattedSkills = skills.slice(0, -1).join(', ')
    const formattedLanguages = languages.slice(0, -1).join(', ')

    personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${skills[skills.length - 1]
        }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

    return personInfo
}
console.log(getPersonInfo1(person))
/*
Asabeneh Yetayeh lives in Finland. He is  250 years old. He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks Amharic, English and a little bit of Suomi(Finnish)
*/
// Destructuring during iteration 
const todoList = [
    {
        task: 'Prepare JS Test',
        time: '4/1/2020 8:30',
        completed: true
    },
    {
        task: 'Give JS Test',
        time: '4/1/2020 10:00',
        completed: false
    },
    {
        task: 'Assess Test Result',
        time: '4/1/2020 1:00',
        completed: false
    }
]

for (const { task, time, completed } of todoList) {
    console.log(task, time, completed)
}

// spread operator or rest operator 
// spread to get the rest of the elements in array 
//     const nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let [num11, num12, num13, ...rest1] = nums1
// console.log(num11, num12, num13)
// console.log(rest1)

const countries02 = [
    'Germany',
    'France',
    'Belgium',
    'Finland',
    'Sweden',
    'Norway',
    'Denmark',
    'Iceland'
]

let [gem, fra, , ...nordicCountries] = countries02

console.log(gem)
console.log(fra)
console.log(nordicCountries)

//   Spread operator to copy array

const evens = [0, 2, 4, 6, 8, 10]
const evenNumbers = [...evens]

const odds = [1, 3, 5, 7, 9]
const oddNumbers = [...odds]

const wholeNumbers = [...evens, ...odds]

console.log(evenNumbers)
console.log(oddNumbers)
console.log(wholeNumbers)

// Spread operator to copy object
const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki'
}

const copiedUser = { ...user }
console.log(copiedUser)

//   Modifying or changing the object while copying
const copiedUserTwo = { ...user, title: 'instructor' }
console.log(copiedUserTwo)

// Spread Operator With Arrow Function 

const showing = (...args) => {
    console.log(args)
}

showing(1, 2, 3, 4, 5)


const sumAllNums = (...args) => {
    let sum = 0
    for (const num of args) {
        sum += num
    }
    return sum

}

console.log(sumAllNums(1, 2, 3, 4, 5))