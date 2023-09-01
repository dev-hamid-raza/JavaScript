//scope.js
a = 'JavaScript' // declaring a variable without let or const make it available in window object and this found anywhere
b = 10 // this is a global scope variable and found in the window object
function letsLearnScope() {
    console.log(a, b)
    if (true) {
        console.log(a, b)
    }
}
console.log(a, b) // accessible

//scope.js
a = 'JavaScript' // is a global scope it will be found anywhere in this file
b = 10 // is a global scope it will be found anywhere in this file
function letsLearnScope() {
    console.log(a, b) // JavaScript 10, accessible
    if (true) {
        let a = 'Python'
        let b = 100
        console.log(a, b) // Python 100
    }
    console.log(a, b)
}
letsLearnScope()
console.log(a, b) // JavaScript 10, accessible

//scope.js
a = 'JavaScript' // is a global scope it will be found anywhere in this file
b = 10 // is a global scope it will be found anywhere in this file
// Function scope
function letsLearnScope() {
    console.log(a, b) // JavaScript 10, accessible
    let value = false
    // block scope
    if (true) {
        // we can access from the function and outside the function but 
        // variables declared inside the if will not be accessed outside the if block
        let a = 'Python'
        let b = 20
        let c = 30
        let d = 40
        value = !value
        console.log(a, b, c, value) // Python 20 30 true
    }
    // we can not access c because c's scope is only the if block
    console.log(a, b, value) // JavaScript 10 true
}
letsLearnScope()
console.log(a, b) // JavaScript 10, accessible

//scope.js
function letsLearnScope() {
    var gravity = 9.81
    console.log(gravity)

}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true) {
    var gravity = 9.81
    console.log(gravity) // 9.81
}
console.log(gravity)  // 9.81

for (var i = 0; i < 3; i++) {
    console.log(i) // 0, 1, 2
}
console.log(i) // 3

//scope.js
function letsLearnScope() {
    // you can use let or const, but gravity is constant I prefer to use const
    const gravity = 9.81
    console.log(gravity)

}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true) {
    const gravity = 9.81
    console.log(gravity) // 9.81
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

for (let i = 0; i < 3; i++) {
    console.log(i) // 0, 1, 2
}
// console.log(i), Uncaught ReferenceError: i is not defined

//    Now we Are Starting Objects
const person = {}

const rectangle = {
    length: 20,
    width: 20
}
console.log(rectangle) // {length: 20, width: 20}

const person1 = {
    firstName: 'Hamid',
    lastName: 'Raza',
    age: 250,
    country: 'Pakistan',
    city: 'Faisalabad',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ],
    isMarried: true
}
console.log(person1)

const person3 = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ],
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    'phone number': '+3584545454545'
}

// accessing values using .
console.log(person3.firstName)
console.log(person3.lastName)
console.log(person3.age)
console.log(person3.location) // undefined

// value can be accessed using square bracket and key name
console.log(person3['firstName'])
console.log(person3['lastName'])
console.log(person3['age'])
console.log(person3['age'])
console.log(person3['location']) // undefined

// for instance to access the phone number we only use the square bracket method
console.log(person3['phone number'])
console.log(person3.getFullName())

const person4 = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ],
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}
person4.nationality = 'Ethiopian'
person4.country = 'Finland'
person4.title = 'teacher'
person4.skills.push('Meteor')
person4.skills.push('SasS')
person4.isMarried = true

person4.getPersonInfo = function () {
    let skillsWithoutLastSkill = this.skills
        .splice(0, this.skills.length - 1)
        .join(', ')
    let lastSkill = this.skills.splice(this.skills.length - 1)[0]

    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
    return statement
}
console.log(person4)
console.log(person4.getPersonInfo())

const copyPerson = Object.assign({}, person3)
console.log(copyPerson)

const keys = Object.keys(copyPerson)
console.log(keys) //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson)
console.log() //['street', 'pobox', 'city']