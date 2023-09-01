// Primitive Datatypes --------
let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)      // true

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)             //false 

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff) // false

let nums = [1 , 2 , 3]
console.log(nums[0])
let numbers = [1, 2, 3]

console.log(nums == numbers)  // false
let UserOne = {
    name: "Hamid" ,
    role: "Developer" ,
    country: "Pakistan"
}
let UserTwo = {
    name: "Hamid" ,
    role: "Developer" ,
    country: "Pakistan"
}
console.log(UserOne == UserTwo) // false
let num3 = nums
console.log(num3 == nums) // true
let UserThree = UserOne
console.log(UserThree == UserOne) // true
// ===== Numbers ======
let age = 35
const gravity = 9.81  // we use const for non-changing values, gravitational constant in  m/s2
let mass = 72         // mass in Kilogram
const Pi = 3.14       // pi a geometrical constant

// More Examples
const boilingPoint = 100 // temperature in oC, boiling point of water which is a constant
const bodyTemp = 37      // oC average human body temperature, which is a constant

console.log(age, gravity, mass, Pi, boilingPoint, bodyTemp)
const PI = Math.PI
console.log(PI)                            // 3.141592653589793

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding
console.log("=======================================")
console.log(Math.round(PI))                // 3 to round values to the nearest number

console.log(Math.round(9.81))              // 10

console.log(Math.floor(PI))                // 3 rounding down

console.log(Math.ceil(PI))                 // 4 rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value

const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum)
const num = Math.floor(Math.random () * 11) // creates random number between 0 and 10
console.log(num)

//Absolute value
console.log(Math.abs(-10))      // 10

//Square root
console.log(Math.sqrt(100))     // 10

console.log(Math.sqrt(2))       // 1.4142135623730951

// Power
console.log(Math.pow(3, 2))     // 9

console.log(Math.E)             // 2.718
// ====== Strings ==========
let space = ' '           // an empty space string
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let quote = "The saying,'Seeing is Believing' is not correct in 2020."
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`
let fullName = firstName + space + lastName; // concatenation, merging two string together.
console.log(fullName);

const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)

// Escape Sequence in Strings 
console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)

console.log(`${a} is greater than ${b}: ${a > b}`)

// ======= Methods of Strings ======
// let js = 'JavaScript'
console.log(js.length)         // 10
console.log(firstName.length)  // 8

let string = 'JavaScript'
let firstLetter = string[0]
console.log(firstLetter)           // J
let secondLetter = string[1]       // a
let thirdLetter = string[2]
let lastLetter = string[9]

console.log(lastLetter)            // t

let lastIndex = string.length - 1

console.log(lastIndex)  // 9
console.log(string[lastIndex])    // t
// Changing String into UpperCase By Using toUpperCase() Function 
console.log(string.toUpperCase())     // JAVASCRIPT
console.log(firstName.toUpperCase())  // ASABENEH
console.log(country.toUpperCase())    // FINLAND
// ======= substr() function to Get SubString From the String  ======= 
console.log(string.substr(4,6))    // Script
console.log(country.substr(3, 4))   // land

// substring(): It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.
console.log(string.substring(0,4))     // Java
console.log(string.substring(4,10))    // Script
console.log(string.substring(4))       // Script
console.log(country.substring(0, 3))   // Fin
console.log(country.substring(3, 7))   // land
console.log(country.substring(3))      // land

let string1 = '30 Days Of JavaScript'

console.log(string1.split())     // Changes to an array -> ["30 Days Of JavaScript"]
console.log(string1.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]
console.log(firstName.split())    // Change to an array - > ["Asabeneh"]
console.log(firstName.split(''))  // Split to an array at each letter ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

console.log(countries.split(','))  // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]

// trim(): Removes trailing space in the beginning or the end of a string.

let string2 = '   30 Days Of JavaScript   '

console.log(string2)
console.log(string2.trim(' '))

let firstName1 = ' Asabeneh '

console.log(firstName1)
console.log(firstName1.trim())  // still removes spaces at the beginning and the end of the string

// Includes() Function Check SubString In the String
console.log(string1.includes('Days'))     // true
console.log(string1.includes('days'))     // false - it is case sensitive!
console.log(string1.includes('Script'))   // true
console.log(string1.includes('script'))   // false
console.log(string1.includes('java'))     // false
console.log(string1.includes('Java'))     // true

console.log(country.includes('fin'))     // false
console.log(country.includes('Fin'))     // true
console.log(country.includes('land'))    // true
console.log(country.includes('Land'))    // false

// let string1 = '30 Days Of JavaScript'
console.log(string1.replace('JavaScript', 'Python')) // 30 Days Of Python
console.log(country.replace('Fin', 'Noman'))       // Nomanland

let lastIndex1 = string1.length - 1
console.log(string1.charAt(lastIndex1)) // t
// ASCII Number 
console.log(string1.charCodeAt(0))   // D ASCII number is 68
console.log(string.charCodeAt(lastIndex)) // t ASCII is 116

// Finding Index of the different substring
console.log(string1.indexOf('D'))          // 3
console.log(string1.indexOf('Days'))       // 3
console.log(string1.indexOf('days'))       // -1
console.log(string1.indexOf('a'))          // 4
console.log(string1.indexOf('JavaScript')) // 11
console.log(string1.indexOf('Script'))     //15
console.log(string1.indexOf('script'))     // -1


// Concatenation of the strings 
let string3 = '30'
console.log(string3.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript


// StartsWith() function ===========
let string4 = 'Love is the best to in this world'

console.log(string4.startsWith('Love'))   // true
console.log(string4.startsWith('love'))   // false
console.log(string4.startsWith('world'))  // false

console.log(country.startsWith('Fin'))   // true
console.log(country.startsWith('fin'))   // false
console.log(country.startsWith('land'))  //  false

// endsWith() Function ========
console.log(string4.endsWith('world'))         // true
console.log(string4.endsWith('love'))          // false
console.log(string4.endsWith('in the world')) // true

console.log(country.endsWith('land'))         // true
console.log(country.endsWith('fin'))          // false
console.log(country.endsWith('Fin'))          //  false

// SubString Search Function ===========
let string5 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string5.search('love'))          // 2
console.log(string5.search(/javascript/gi))  // 7

// match() function =======
console.log(string5.match('love'))
// pattern making ========
let pattern = /love/gi
console.log(string5.match(pattern))   // ["love", "love", "love"]

// Repeat the string 
let string6 = 'love'
console.log(string6.repeat(10)) // lovelovelovelovelovelovelovelovelovelove
// Checking Data types =======
console.log(typeof 'Asabeneh')  // string
console.log(typeof firstName)   // string
console.log(typeof 10)          // number
console.log(typeof 3.14)        // number
console.log(typeof true)        // boolean
console.log(typeof false)       // boolean
console.log(typeof NaN)         // number
console.log(typeof job)         // undefined
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object

// casting string to integer 
let num1 = '10'
let numInt = parseInt(num1)
console.log(numInt) // 10

let numInt1 = Number(num1)

console.log(numInt1) // 10

let numInt2 = +num1

console.log(numInt2) // 10

// string to float

let num2 = '9.81'
let numFloat4 = parseFloat(num2)

console.log(numFloat4) // 9.81

let numFloat5 = Number(num2)

console.log(numFloat5) // 9.81

let numFloat6 = +num2

console.log(numFloat6) // 9.81

// float to int 

let num4 = 9.81
let numInt7 = parseInt(num4)

console.log(numInt7) // 9