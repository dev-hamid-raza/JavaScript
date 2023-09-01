console.log("Level 2 Exercise >>>>")
console.log("The quote \'There is no exercise better for the heart than reaching down and lifting up the people up.\' By John Homles teaches us to help one and other.")
console.log("\"Love is not patronizing and charity isn\'t about pity. Charity and love are the same -- with you give love, so don\'t just give the money but reach out your hand instead.\"")
let num = "10"
let numInInt = +num
console.log(numInInt + 10 )
let num2 = "9.8"
let numInFloat = parseFloat(num2)
console.log(numInFloat)
console.log(Math.round(numInFloat))
let string1 = 'python'
let string2 = 'jargon'
console.log(string1.includes('on') == string2.includes('on'))
let string3 = 'I hope this course is not full of jargon'
console.log(string3.includes('jargon'))
console.log(Math.floor(Math.random() * 101))
// random number between 50 to 100
console.log(Math.floor(Math.random() * 50 + 50))
console.log(Math.floor(Math.random() * 256))
let string4 = 'JavaScript'
// console.log(string4.length)
let rand = Math.floor(Math.random() * 10)
console.log(string4.charAt(rand))
console.log(" 1 1 1 1 1 \n 2 1 2 4 8 \n 3 1 3 9 27 \n 4 1 4 16 64 \n 5 1 5 25 125")
let string5 = 'You cannot end a sentence with because because because is a conjunction'
let str = string5.indexOf('because')
let end = string5.lastIndexOf('is')
// console.log(string5.lastIndexOf('because'))
console.log(string5.substr(str,end - str - 1))
// conting the words
let string6 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let words = string6.split(' ')
console.log(words.length)
// console.log(string6.split(' '))
// count the because in by match 
// let count = string5.split('because')
// console.log(count.length)
// console.log(string5.match('because'))

// Question : Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let string7 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
console.log(string7.indexOf('5000'))
console.log(string7.indexOf('10000'))
console.log(string7.indexOf('15000'))
// let stringSalaryMonth = string7.charAt('5000')
