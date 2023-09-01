const printArray = arr =>{
    for(let element of arr)
        console.log(element)
}
let arr = [2,3,4,5,6,7,8]
printArray(arr)

const showDateTime = function(){
    const now =  new Date()
    let day = `${now.getDate()}`
    let mon = `${now.getMonth() + 1}`
    let year = `${now.getFullYear() }`
    let hours = `${now.getHours() }`
    let min = `${now.getMinutes() }`
        if(day.length != 2)
            day = `0${day}`
        if(mon.length != 2)
            mon = `0${mon}`
        if(hours.length != 2)
            hours = `0${hours}`
        if(min.length != 2)
            min = `0${min}`
        
    console.log(`${day}/${mon}/${year} ${hours}:${min}`)
}
showDateTime()

const swapValues = (x, y) => {
    let a = x
    let b = y
    x = b
    y = a
    console.log(x,y)
}
swapValues(12,14)

const reverseArray = arr => {
    let newArray = []
        for(let i = arr.length -1; i >= 0; i--)
            newArray.push(arr[i])
    console.log(newArray)
}
let revArray = [1,2,3,4,5,6]
reverseArray(revArray)

const capitalizeArray = arr => {
    let newArray = []
    for(let element of arr)
        newArray.push(element.toUpperCase())
    return newArray
}
console.log(capitalizeArray(['a','b','c','d']))
