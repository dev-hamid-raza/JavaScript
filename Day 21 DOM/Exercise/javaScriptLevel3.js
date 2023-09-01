const year = document.querySelector('.year')
const dated = document.querySelector('.dated')
const list =  document.querySelectorAll('li')
year.style.fontSize = '52px'

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
setInterval(() => {
    year.style.color = randomColor()
    dated.style.backgroundColor = randomColor()
    // dated.style.color = randomColor()
}, 1000)
const showDateTime = () => {
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth() + 1
    const date = now.getDate()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    if (hours < 10) {
        hours = '0' + hours
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }

    const dateMonthYear = date + '.' + month + '.' + year
    const time = hours + ':' + minutes
    const fullTime = dateMonthYear + ' ' + time
    return fullTime
}

dated.innerHTML = showDateTime()
list.forEach(element => {
    element.style.backgroundColor = 'red'
})
setTimeout(() => {
    list[0].style.backgroundColor = 'green'
    // list[1].style.backgroundColor = 'yellow'
}, 1000)
setTimeout(() => {
    // list[0].style.backgroundColor = 'green'
    list[1].style.backgroundColor = 'yellow'
}, 2000)