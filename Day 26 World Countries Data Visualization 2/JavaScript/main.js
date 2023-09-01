const resultContainer = document.querySelector('.result-container')
const startingButton = document.querySelector('.start')
const randomSearchButton = document.querySelector('.search')
const sortButton = document.querySelector('.sort')
const input = document.querySelector('input')
const sortIcon = document.querySelector('.sort-icon')
const total = document.querySelector('#total')
const h3 = document.querySelector('h3')


total.innerHTML = countries.length

let capCountries = countries.map(element => element.toUpperCase())
let mainCountries = capCountries

let type = false

startingButton.addEventListener('click', () => {
    type = false
    startingButton.classList.add('active')
    randomSearchButton.classList.remove('active')
})
randomSearchButton.addEventListener('click', () => {
    type = true
    startingButton.classList.remove('active')
    randomSearchButton.classList.add('active')
})

const searchWithStart = (inputValue) => {
    const result = capCountries.filter(element => element.startsWith(inputValue))
    console.log(result)
    return result
}

const searchWithAnyWord = (inputValue) => {
    const result = capCountries.filter(element => element.match(inputValue))
    return result
}

input.addEventListener('input', () => {
    const string = input.value.toUpperCase()
    if (type) {
        mainCountries = searchWithAnyWord(string)
        h3.innerHTML = `Countries containing <span class='text'>${input.value}</span> are <span class='number'>${mainCountries.length}</span> `
        if (input.value == '')
            h3.innerHTML = ''
    } else {
        mainCountries = searchWithStart(string)
        h3.innerHTML = `Countries start with <span class='text'>${input.value}</span> are <span class='number'>${mainCountries.length}</span> `
        if (input.value == '')
            h3.innerHTML = ''
    }
    showResult(mainCountries)
})

const showResult = (countries) => {
    resultContainer.innerHTML = ''
    countries.forEach(element => {
        const box = document.createElement('div')
        box.setAttribute('class', 'box')
        box.innerHTML = element.toUpperCase()
        resultContainer.appendChild(box)
    })
}




sortButton.addEventListener('click', () => {
    sortIcon.classList.toggle('fa-arrow-down-a-z')
    sortIcon.classList.toggle('fa-arrow-up-a-z')
    sortButton.classList.toggle('z-a')
    const result = sortButton.classList.contains('z-a')
    if (result) {
        mainCountries.reverse()
    } else {
        mainCountries.sort()
    }
    showResult(mainCountries)
})
showResult(mainCountries)