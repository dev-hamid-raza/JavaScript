let range = Math.floor(Math.random() *50)
const alpha = 'abcdefghijklmnopqrstuvwxyz1234567890'
let result = ''
for(let i = 1; i <= range; i++)
{
    result += alpha.charAt(Math.floor(Math.random() * alpha.length))
}
console.log(result)
const hexa = '0123456789abcdef'
result = '#'
for(let i = 0; i < 6; i++)
{
    result += hexa.charAt(Math.floor(Math.random() * hexa.length))
}
console.log(result)
document.write(`<h1 style=\"color:${result};\">Hamid</h1>`)
result = 'rgb(' 
for(let i = 1; i <= 3; i++)
{
    i < 3
    ? result += Math.floor(Math.random() *256) + ','
    : result += Math.floor(Math.random() *256) + ')'
}
console.log(result)
document.write(`<h1 style=\"color:${result};\">Raza</h1>`)
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
let arr = []
for(let i = 0; i < countries.length; i++)
{
    arr.push(countries[i].toUpperCase())
}
console.log(arr)
arr = []
for(let i = 0; i < countries.length; i++)
{
    arr.push(countries[i].length)
}
console.log(arr)
arr = []
for(let i = 0; i < countries.length; i++)
{
    arr.push([countries[i],countries[i].substring(0,3).toUpperCase(),countries[i].length])
}
console.log(arr)
arr = []
for(let i = 0; i < countries.length; i++)
{
    let check = countries[i].includes('land')
    if(check == true)
        arr.push(countries[i])
}
console.log(arr)
let size = 0
let largest
for(let i = 0; i < countries.length; i++)
{
    
    if(size < countries[i].length)
    {
        largest = countries[i]
        size = countries[i].length
    }
}
console.log(largest)
arr = []
for(let i = 0; i < countries.length; i++)
{
    if(countries[i].length == 5)
        arr.push(countries[i])
}
console.log(arr)