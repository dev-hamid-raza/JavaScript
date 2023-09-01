// Is file is connected ?
console.log(true)
// == Defining CallBack Function ==
const callBack = (Number) => {
    return Number ** 2
}
const cube = (callBack,Num) => {
    return callBack(Num) * Num
}
console.log(cube(callBack,4))
// == Use these Array for next question ==
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
{ product: 'banana', price: 3 },
{ product: 'mango', price: 6 },
{ product: 'potato', price: ' ' },
{ product: 'avocado', price: 8 },
{ product: 'coffee', price: 10 },
{ product: 'tea', price: '' },
]
// == Displaying the array data ==
const displayCountries = countries.forEach((Element) => console.log(Element))
const displayNames = names.forEach((Element) => console.log(Element))
const displayNumbers = numbers.forEach((Element) => console.log(Element))
// == converting counties in to uppercase ==
const uppercaseCountries = countries.map((Element) => Element.toUpperCase())
console.log(uppercaseCountries) // 
// == Getting the length of the countries ==
const lengthOfCountries = countries.map(Element => Element.length)
console.log(lengthOfCountries)
// == Squaring the number in array
const squareNumber = numbers.map(element => element * element)
console.log(squareNumber)
// == changing name into uppercase in new array ==
const uppercaseNames = names.map(element => element.toUpperCase())
console.log(uppercaseNames)
// == corresponding price values ==
const prices = products.map(element => element.price)
console.log(prices)
// == filter outing countries having land ==
const landName = countries.filter(element => element.includes("land"))
console.log(landName)
// filter out countries having six characters == 
const sixChar = countries.filter((element) => element.length == 6)
console.log(sixChar)
// filter outing countries having six 0r more than six characters ==
const countriesHaveSixOrMore = countries.filter(element => element.length <= 6)
console.log(countriesHaveSixOrMore)
// filter out countries start with letter 'E' ==
const countiesHaveE = countries.filter(element => element.startsWith('E'))
console.log(countiesHaveE)
// == filter out prices by using filter method ==
const filterPrice = products.filter(element =>  element.price )
console.log(filterPrice)
// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
const getStringLists = (arr) => {
    const string = arr.filter(item => typeof(item) == 'string') 
    return string
}
const arr = [1,2, "Hamid" , "Raza" , true]
const result = getStringLists(arr)
console.log(result)
// Sum up all the numbers in array 
const sumOfNumbers = numbers.reduce((sum,element) => sum += element ,0)
console.log(sumOfNumbers)
// Concatenating String by using reduce method 
const stringConcat = countries.reduce((string, element , index) => {
if( index === countries.length - 1){
    return string + 'and ' + element
    } else{
    return string + element + ', '
    }
}, 'Estonia, ' )
const finalSentence = stringConcat + "are the north European countries"
console.log(finalSentence)
// Checking length 
const lengthGreaterSeven = countries.some(element => element.length >= 7)
console.log(lengthGreaterSeven)
// is Every country contain land?
const containLand = countries.every((element) => element.includes('land'))
console.log(containLand)
// finding Countries that have six letter
const indexOfSix = countries.find((element) => element.length == 6)
console.log(indexOfSix)
// finding the index of the countries which have only contain six letters 
const sixLetters = countries.findIndex(element => element.length == 6)
console.log(sixLetters)
// finding the position 
const position = countries.findIndex(element => element === 'Norway')
console.log(position)