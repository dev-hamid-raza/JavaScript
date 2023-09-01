const userID = (char, Number) => {
    const character = 'ABCDEFGHIJKLMNOPQRSTUVWabcdefghijklmnopqrstuvw1234567890'
    let ID = ''
    for (let i = 1; i <= Number; i++) {
        for (let j = 1; j <= char; j++) {
            ID += character.charAt(Math.floor(Math.random() * character.length))
        }
        console.log(ID)
        ID = ''
    }

    // return character
}
userID(6, 10)

// Generating Random RGB
const rgbColor = function () {
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    console.log(`rgb(${red},${green},${blue})`)
}
rgbColor()

const arrayOfHexa = function () {
    let char = '0123456789abcdef'
    let str = '#'
    let hexa = []
    for (let i = 0; i <= 5; i++) {
        for (let j = 0; j <= 5; j++) {
            str += char.charAt(Math.floor(Math.random() * (char.length + 1)))
        }
        hexa.push(str)
        str = '#'
    }
    console.log(hexa)
}
arrayOfHexa()

// Hexa to RGB>>>>>>>>>>>>>>>>>
function convertHexaToRgb(hex) {
    // Remove the # symbol, if present
    hex = hex.replace("#", "");

    // If the hex code is shorthand (e.g. #abc), expand it to full form (e.g. #aabbcc)
    if (hex.length === 3) {
        hex = hex.split("").map(function (c) {
            return c + c;
        }).join("");
    }

    // Convert the hex code to RGB values
    var r = parseInt(hex.substring(0, 2), 16);
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4, 6), 16);

    // Return the RGB color as a string
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
var hexColor = "#ff0000";
var rgbColor1 = convertHexaToRgb(hexColor);
console.log(rgbColor1); // "rgb(255, 0, 0)"

// RBA to hexa>>>>>>>>>>>>>>>>>>>>
function convertRgbToHexa(r, g, b) {
    // Convert each component to a hex string and concatenate them
    var hex = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);

    // Return the hex color
    return hex;
}

// Helper function to convert a single RGB component to a hex string
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
var r = 255, g = 0, b = 0;
var hexColor = convertRgbToHexa(r, g, b);
console.log(hexColor); // "#ff0000"

// Shuffling the Array
const shuffleArray = arr => {
    let shuffledArray = arr
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = shuffledArray[i]
        shuffledArray[i] = shuffledArray[j]
        shuffledArray[j] = temp
    }
    return shuffledArray
}
let check = [1, 2, 3, 4, 5]
let newCheck = shuffleArray(check)
// console.log(shuffleArray(check))
console.log(newCheck)
// function shuffleArray(array) {
//     // Copy the original array to avoid modifying it
//     var shuffledArray = array.slice();

//     // Fisher-Yates shuffle algorithm
//     for (var i = shuffledArray.length - 1; i > 0; i--) {
//       var j = Math.floor(Math.random() * (i + 1));
//       var temp = shuffledArray[i];
//       shuffledArray[i] = shuffledArray[j];
//       shuffledArray[j] = temp;
//     }

//     // Return the shuffled array
//     return shuffledArray;
//   }
//   var originalArray = [1, 2, 3, 4, 5];
//   var shuffledArray = shuffleArray(originalArray);
//   console.log(shuffledArray); // e.g. [3, 5, 4, 1, 2]  
const factorial = num => {
    let fact = 1
    for (let i = 1; i <= num; i++) {
        fact *= i
    }
    return fact
}
console.log(factorial(5))

const isEmpty = para => {
    let result = false
    if (para == null)
        result = true
    if (para == undefined)
        result = true
    if (result == true)
        return result = 'Is Empty'
    else (result == false)
    return result = 'not empty'
}
let string = 2
console.log(isEmpty(string))

const sumOfArray = arr => {
    let sum = 0
    let result = true
    for (let i = 0; i < arr.length; i++) {
        let type = typeof (arr[i])
        if (type != 'number')
            result = false
    }
    if (result == true) {
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
        }
        return sum
    }
    else
        return result = 'All Elements are not numbers'
}
console.log(sumOfArray([2, 2, 2, 2, ""]))
const averageOfArray = arr => {
    let sum = 0
    let result = true
    for (let i = 0; i < arr.length; i++) {
        let type = typeof (arr[i])
        if (type != 'number')
            result = false
    }
    if (result == true) {
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
        }
        return sum / arr.length
    }
    else
        return result = 'All Elements are not numbers'
}
console.log(averageOfArray([2, 2, 2, 2]))

const isPrime = number => {
    number = 15
    result = true
    for (let i = 2; i < number; i++) {
        if (number % i == 0)
            result = false
    }
    result == true
        ? console.log(`${number} is a Prime Number`)
        : console.log(`${number} is not a prime number`)
}
isPrime()

const unique = arr => {
    let temp
    let result
    for (let i = 0; i < arr.length; i++) {
        temp = arr.pop()
        if (arr.includes(temp) == true)
            result = true
        arr.unshift(temp)
    }
    result == true
        ? console.log("The array is not unique")
        : console.log("This Array is Unique")

}
unique([1, 2, 3,])
// console.log([1,2,3].pop())
function allItemsAreUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return false;
            }
        }
    }
    return true;
}
console.log(allItemsAreUnique([1, 2, 3]))