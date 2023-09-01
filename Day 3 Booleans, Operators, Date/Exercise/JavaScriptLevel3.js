let dating = new Date()
let month
let date
let hours
let minutes
dating.getMonth() > 9  
    ? month = dating.getMonth() + 1
    : month = `0${dating.getMonth() + 1}`
dating.getDate() > 9
    ? date = dating.getDate() 
    : date = `0${dating.getDate()}`
dating.getHours() > 9 
    ? hours = dating.getHours()
    : hours = `0${dating.getHours()}`
dating.getMinutes() > 9
    ? minutes = dating.getMinutes()
    : minutes = `0${dating.getMinutes()}`
console.log(`${dating.getFullYear()}-${month}-${date}  ${hours}:${minutes}`)
// dating.getMonth().length == 2 && dating.getHours().length == 2 && dating.getHours().length == 2 && dating.getMinutes().length == 2
//     ? console.log(`${dating.getFullYear()}-${dating.getMonth() + 1}-${dating.getDate()}`)
//     : k