// Question # 1 >>>>>>>>
let string = '30 Days Of JavaScript'
// Question # 2 >>>>>>>\
console.log(string)
// Printing the Length of the String
console.log(string.length)
// Uppercase 
console.log(string.toUpperCase())
// lowerCase
console.log(string.toLowerCase())
// Slicing the string 
// console.log(string.indexOf('Days'))
console.log(string.substr(3,4))
console.log(string.substring(11,21))
console.log(string.substring(3,21))
// checking the substring is given?
console.log(string.includes('Script'))
console.log(string.split())
console.log(string.split(' '))
let stringTwo = "Facebook, Google, Apple, IBM, Microsoft, Oracle, Amazon"
console.log(stringTwo.split(', '))
// Replacing the substring 
console.log(string.replace('JavaScript' , 'Python'))
// Finding addressing in string
console.log(string.charAt(15))
// console.log(string.indexOf('J'))
console.log(string.charCodeAt(11))
// Finding the index of the substring
console.log(string.indexOf('a'))
console.log(string.lastIndexOf('a'))
let stringThree = 'You cannot end a sentence with because because because is a conjunction'
console.log(stringThree.indexOf('because'))
console.log(stringThree.lastIndexOf('because'))
// trim the space of the following String
let stringFour = '  30 Days OF JavaScript'
console.log(stringFour.trim())
console.log(string.startsWith('30'))
console.log(string.endsWith('Script'))
// finding match in string
console.log(string.match('a'))
// repeating the String 
console.log(string.repeat(2))
// concatenation
let string1 = '30 Days' , 
    string2 = 'Of'
    spc = ' '
    string3 = 'JavaScript'
console.log(string1.concat(spc ,string2, spc, string3))