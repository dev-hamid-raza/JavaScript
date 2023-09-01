// without flag
let patternOne = 'love'
let regExOne = new RegExp(patternOne)
// with flag
let patternTwo = 'love'
let flag = 'gi'
let regExTwo = new RegExp(patternTwo, flag)
let regExThree = new RegExp('love', 'gi')
// Creating Regular Expressions without RegExp constructor
let regExFour = /love/gi

// RegExp Object Methods 
const str = 'I love JavaScript'
const strPattern = /love/
const strPatternTwo = /love/g
const result = strPattern.test(str)
console.log(result)

const resultTwo = str.match(strPattern)
console.log(resultTwo)
const resultThree = str.match(strPatternTwo)
console.log(resultThree)

const resultFour = str.search(patternOne)
console.log(resultFour)

const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python|python/, 'JavaScript')
console.log(matchReplaced)
matchReplaced = txt.replace(/Python|python/g, 'JavaScript')
console.log(matchReplaced)
matchReplaced = txt.replace(/Python/gi, 'JavaScript')
console.log(matchReplaced)


const txt2 = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

const matches = txt2.replace(/%/g, '')
console.log(matches)  

const pattern = '[Aa]pple' // this square bracket means either A or a
const txt3 = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matches2 = txt3.match(pattern)

console.log(matches2)  


const pattern2 = /[Aa]pple/g // this square bracket means either A or a
const txt4 = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matches3 = txt4.match(pattern2)

console.log(matches3)  

const pattern3 = /[Aa]pple|[Bb]anana/g // this square bracket mean either A or a
const txt5 = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.'
const matches4 = txt5.match(pattern3)

console.log(matches4)  

// Escape characters 

const pattern6 = /\d/g  // d is a special character which means digits
const txt6 = 'This regular expression example was made in January 12,  2020.'
const matches6 = txt6.match(pattern6)

console.log(matches6)  // ["1", "2", "2", "0", "2", "0"], this is not what we want

const pattern7 = /\d+/g  // d is a special character which means digits
const txt7 = 'This regular expression example was made in January 12,  2020.'
const matches7 = txt7. match(pattern7)

console.log(matches7)  // ["12", "2020"], this is not what we want

// One or more times(+)

const pattern8 = /\d+/g  // d is a special character which means digits
const txt8 = 'This regular expression example was made in January 12,  2020.'
const matches8 = txt8. match(pattern8)
console.log(matches8)  // ["12", "2020"], this is not what we want

// Period(.) 
 
const pattern9 = /[a]./g  // this square bracket means a and . means any character except new line
const txt9 = 'Apple and banana are fruits'
const matches9 = txt9.match(pattern9)

console.log(matches9)  // ["an", "an", "an", "a ", "ar"]

// zero or more times (+) 
const pattern10 = /[a].+/g  // . any character, + any character one or more times 
const txt10 = 'Apple and banana are fruits'
const matches10 = txt10.match(pattern10)

console.log(matches10)  // ['and banana are fruits']

// zero or one times (?)


const txt11 = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
const pattern11 = /[Ee]-?mail/g  // ? means optional
const matches11 = txt11.match(pattern11)

console.log(matches11)  // ["e-mail", "email", "Email", "E-mail"]

// Quantifier in RegExp
const txt12 = 'This regular expression example was made in December 6,  2019.'
const pattern12 = /\b\w{4}\b/g  //  exactly four character words
const matches12 = txt12.match(pattern12)
console.log(matches12)  //['This', 'made', '2019']

const txt13 = 'This regular expression example was made in December 6,  2019.'
const pattern13 = /\b[a-zA-Z]{4}\b/g  //  exactly four character  words without numbers
const matches13 = txt13.match(pattern13)
console.log(matches13)  //['This', 'made']

const txt14 = 'This regular expression example was made in December 6,  2019.'
const pattern14 = /\d{4}/g  // a number and exactly four digits
const matches14 = txt14.match(pattern14)
console.log(matches14)  // ['2019']

const txt15 = 'This regular expression example was made in December 6,  2019.'
const pattern15 = /\d{1,4}/g   // 1 to 4
const matches15 = txt15.match(pattern15)
console.log(matches15)  // ['6', '2019']

// cart ^ 
const txt16 = 'This regular expression example was made in December 6,  2019.'
const pattern16 = /^This/g // ^ means starts with
const matches16 = txt16.match(pattern16)
console.log(matches16)  // ['This']

// Negation
const txt17 = 'This regular expression example was made in December 6,  2019.'
const pattern17 = /[^A-Za-z,. ]+/g  // ^ in set character means negation, not A to Z, not a to z, no space, no comma no period
const matches17 = txt17.match(pattern17)
console.log(matches17)  // ["6", "2019"]

// Exact Match 
let pattern18 = /^[A-Z][a-z]{3,12}$/;
let name18 = 'Asabeneh';
let result18 = pattern18.test(name18)

console.log(result18) // true