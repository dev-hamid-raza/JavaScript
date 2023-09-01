// const countries = ['hello']
let marge = countries.concat(webTechs)
console.log(marge)
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let word = text.replace(/,/g , '' )
// console.log(words)
let words = word.split(' ')
console.log(words.length)
const shoppingCart = ['Milk', 'Sugar' , 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
console.log(shoppingCart)
if(shoppingCart.includes('Sugar') != true)
{
    shoppingCart.unshift('Sugar')
}
console.log(shoppingCart)
shoppingCart.pop()
console.log(shoppingCart)
let mod = shoppingCart.indexOf('Tea')
shoppingCart[mod] = 'Green Tea'
console.log(shoppingCart)
if(countries.indexOf('Ethiopia') === -1 ){
    countries.push('Ethiopia')
}
else{
    console.log('Ethiopia')
}
console.log(countries)
const age = [19,22,19,24,20,25,26,24,25,24]
let arrange = age.sort()
console.log(age)
let mid = age.length 
if(mid % 2 == 0)
{
    console.log(age[mid/2])
}
else{
    console.log(age[Math.floor(mid/2)])
}
console.log(countries)
let point = countries.length
console.log(point)
if(point % 2 == 0){
    let num = point/2
    console.log(countries)
    let firstPart = countries.slice(0,num)
    let endPart = countries.slice(num , num +num)
    console.log(firstPart)
    console.log(endPart)
}
else
{
    console.log("------------")
    countries.push("Pakistan")
    console.log(countries)
    point = countries.length
    let num = point/2
    console.log(point)
    let firstPart = countries.slice(0,num)
    let endPart = countries.slice(num , num +num)
    console.log(firstPart)
    console.log(endPart)
}
