const fullName = fname => console.log('Hamid Raza')
fullName()

const completeName = (firstName, lastName) => `${firstName} ${lastName}`
console.log(completeName("Khan", "Nasir"))

const addNumbers = (numOne, numTwo) => numOne + numTwo
console.log(addNumbers(3,4))

const area = (length,width) => length * width
console.log(area(13,12))

const perimeterOfRectangle = (length, width) => 2*(length + width)
console.log(perimeterOfRectangle(45,56))

const volumeOfReactPrism = (length, width, height) => length * width * height
console.log(volumeOfReactPrism(45,78,2))

const areaOfCircle = radius =>  Math.PI * radius * radius
console.log(areaOfCircle(4))

const circumOfCircle = function(r){
    return 2 * Math.PI * r
}
console.log(circumOfCircle(2))

const density = function(mass, volume){
    let density = mass/volume
    return density
}
let mass = 14
let volume = 2
console.log(density(mass, volume))
const weight = (function(mass){
    const gravity = 9.8
    console.log(mass * gravity)
})(12)

const findMAx = (num1, num2, num3) =>{
    if(num1 > num2){
        
        if(num1 > num3){
            console.log(`${num1} is greater than all numbers`)
    }  else{
        console.log(`${num3} is greater than all numbers`)
    }
}
else if(num2 > num3){
    console.log(`${num2} is greater than all numbers`)
}else{
    console.log(`${num3} is greater than all numbers`)
}
}
findMAx(100,120,-140)