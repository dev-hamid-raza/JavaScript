console.log("Checking")
let firstName = 'Hamid'
let lastName = 'Raza'
let country = 'Pakistan'
let city = 'Faisalabad'
let age = 21
let isMarried = false
let year = 2023
console.log(typeof(firstName))
console.log(typeof(lastName))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(year))
// Question # 2>>>>>
console.log('10' === 10)
console.group(parseInt('9.8') === 9.8)

console.log(4 > 3)      // true
console.log(4 >= 3)     //true
console.log(4 < 3)      //false
console.log(4 <= 3)     //false
console.log(4 == 4)     //true
console.log(4 === 4)    //true
console.log(4 != 4)     //false
console.log(4 !== 4)    //false
console.log(4 !== '4')  //true
console.log(4 == '4')   //true
console.log(4 === '4')  //false
let lang1 = 'Python'
let lang2 = 'Jargon'
console.log(lang1.length > lang2.length)

console.log(4 > 3 && 10 < 12)       //true
console.log(4 > 3 && 10 > 12)       //false
console.log(4 > 3 || 10 < 12)       //true
console.log(4 > 3 || 10 > 12)       //true
console.log(!(4 > 3))               //false
console.log(!(4 < 3))               //true
console.log(!(false))               //true
console.log(!(4 > 3 && 10 < 12))    //false
console.log(!(4 > 3 && 10 > 12))    //true
console.log(!(4 === '4'))           //true
console.log(!(lang1.includes('on')  == lang2.includes('on')))

// Dating System 

let dating = new Date()
console.log(dating.getFullYear())
console.log(dating.getMonth())
console.log(dating.getDate())
console.log(dating.getDay())
console.log(dating.getHours())
console.log(dating.getMinutes())
console.log(dating.getTime())

