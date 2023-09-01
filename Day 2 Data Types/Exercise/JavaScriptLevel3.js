// Question # 1 >>>>>>>>>>>>>>>>>>>
console.log("Is this running")
let string = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let count = string.match(/love/gi)
// console.log(string.match(/love/gi))
console.log(count.length)
// Question # 2 >>>>>>>>>>

// //Declare Reg using slash
// let reg = /abc/
// //Declare using class, useful for buil a RegExp from a variable
// reg = new RegExp('abc')

// //Option you must know: i -> Not case sensitive, g -> match all the string
// let str = 'Abc abc abc'
// str.match(/abc/) //Array(1) ["abc"] match only the first and return
// str.match(/abc/g) //Array(2) ["abc","abc"] match all
// str.match(/abc/i) //Array(1) ["Abc"] not case sensitive
// str.match(/abc/ig) //Array(3) ["Abc","abc","abc"]
// //the equivalent with new RegExp is
// str.match('abc', 'ig') //Array(3) ["Abc","abc","abc"]
// ``

let string2 = 'You cannot end a sentence with because because because is a conjunction'
let count2 = string2.match(/because/gi).length
console.log(count2)

// question # 3 >>>>>>>>>>
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching.'
let stage1 = sentence.replace(/%|@|;|&|#|!|[$]/g , '')
console.log(stage1)
// console.log(sentence.match(/%/g))
// console.log(sentence.replace(/\W/g , ''))
// Question # 4 >>>>>>>>
const question = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let month = question.match("5000")
let annual = question.match("10000")
let online = question.match("15000")
let perMonths = +month
let bonus = +annual
let Free = +online
let avg = bonus / 12
let total = avg + perMonths + Free
console.log("Total Income is",Math.round(total))