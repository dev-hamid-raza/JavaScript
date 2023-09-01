// const mainContainer = document.getElementById('container')
// const mainContainer = document.getElementsByClassName('main-container')
const mainContainer = document.querySelector('#container')
let box
for (let i = 1; i <= 100; i++) {
    box = document.createElement('div')
    box.style.border = '1px solid #000'
    box.innerHTML = i
    box.style.display = 'flex'
    box.style.justifyContent = 'center'
    box.style.alignItems = 'center'
    if (i % 2 === 0) {
        box.style.backgroundColor = 'green'
    } else {
        box.style.backgroundColor = 'yellow'
    }
    if (i > 1) {
        let isPrime = true
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false
                break
            } else {
                isPrime = true
            }
        }
        if (isPrime)
            box.style.backgroundColor = 'red'
    }
    mainContainer.appendChild(box)
}
console.log(mainContainer)