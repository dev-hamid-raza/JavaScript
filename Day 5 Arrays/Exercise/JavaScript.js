const arr = []
console.log(arr)
const numbers = [1,4,67,23,50]
console.log(numbers.length)
console.log(`First Item ${numbers[0]} , Middle Item ${numbers[2]}, and the last item in array is ${numbers[4]}`)
const mixedDataType = [1,'Hamid',true,null,9.8]
console.log(mixedDataType)
const itCompanies = ['Facebook' , 'Google' , 'Microsoft' , 'Apple' , 'IBM' , 'Oracle' , 'Amazon']
console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[0])
console.log(itCompanies[3])
console.log(itCompanies[6])
console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[6].toUpperCase())
console.log(`${itCompanies[0]} , ${itCompanies[1]} , ${itCompanies[2]} , ${itCompanies[3]} , ${itCompanies[4]} , ${itCompanies[5]} , ${itCompanies[6]} are big IT companies`)
let check = itCompanies.indexOf('Facebook')
// console.log(check)
if(check === -1){
    console.log('Company is not found')
}
else{
    console.log('Company is found')
}
if(itCompanies[0].includes('oo') == true){
    console.log(itCompanies[0])
}
if(itCompanies[1].includes('oo') == true){
    console.log(itCompanies[1])
}
if(itCompanies[2].includes('oo') == true){
    console.log(itCompanies[2])
}
if(itCompanies[3].includes('oo') == true){
    console.log(itCompanies[3])
}
if(itCompanies[4].includes('oo') == true){
    console.log(itCompanies[4])
}
if(itCompanies[5].includes('oo') == true){
    console.log(itCompanies[5])
}
if(itCompanies[6].includes('oo') == true){
    console.log(itCompanies[6])
}
let sorting = itCompanies.sort()
console.log(sorting)
console.log(itCompanies.reverse())
console.log(itCompanies.slice(0,3))
console.log(itCompanies.slice(4,7))
console.log(itCompanies.slice(2,5))
console.log(itCompanies)
// console.log(itCompanies.splice(0,3))
// itCompanies.splice(0,3)
// console.log(itCompanies)
