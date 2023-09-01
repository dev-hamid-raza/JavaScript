const wrapper = document.querySelector('.wrapper')
const h1 = document.createElement('h1')

const fontFamily = ['Segoe UI','Courier New' , 'Tahoma']

const randomColor = () => {
    const string = '1234567890abcdef'
    let color = '#'
    for (let i = 0; i <= 5; i++) {
        const randomNumber = Math.floor(Math.random() * string.length)
        const letter = string.charAt(randomNumber)
        color += letter
    }
    return color
}

const text = '30 Days of JavaScript Challenge 2020 Asabeneh Yetayeh'

const arrayText = text.split('')

const create = () => {
    h1.innerHTML = ''
    arrayText.forEach(character => {
        const span = document.createElement('span')
        span.style.color = randomColor()
        span.innerHTML = character
        h1.appendChild(span)
    })
}

let i = 0

setInterval(() => {
    h1.style.fontFamily = fontFamily[i]
    i++
    if(i == 3)
        i = 0
    create()
    wrapper.appendChild(h1)
}, 2500)