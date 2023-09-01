const mainContainer = document.createElement('div')
mainContainer.style.display = 'grid'
mainContainer.style.gridTemplateColumns = 'repeat(10,100px)'
mainContainer.style.gridAutoRows = '100px'
mainContainer.style.justifyContent = 'center'
mainContainer.style.gap = '5px'
let box
const p = document.querySelector('p')
p.style.color = 'red'
const input = document.querySelector('input')
const button = document.querySelector('button')
let numberOfDiv  
button.addEventListener('click', element => {
    const pattern = '/^[a-zA-Z]+$/'
    const value = input.value
    if(isNaN(value)) {
        p.innerHTML = 'Please Enter a Number'
    } else if (value == '') {
        p.innerHTML = 'Please fill the input field'
    } else {
        p.innerHTML = ''
        numberOfDiv = value
        for (let i = 1; i <= numberOfDiv; i++) {
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
    }


})
document.body.appendChild(mainContainer)