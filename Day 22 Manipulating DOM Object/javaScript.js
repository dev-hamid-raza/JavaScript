let title = document.createElement('h1')
title.className = 'title'
title.style.fontSize = '24px'
title.textContent = 'Creating HTML element DOM Day 2'

console.log(title)

// creating multiple elements
let title1
for (let i = 0; i < 3; i++) {
    title1 = document.createElement('h1')
    title1.className = 'title'
    title1.style.fontSize = '24px'
    title1.textContent = i
    console.log(title1)
}

// creating multiple elements and appending to parent element
let title2
for (let i = 0; i < 3; i++) {
    title2 = document.createElement('h1')
    title2.className = 'title'
    title2.style.fontSize = '24px'
    title2.textContent = i
    document.body.appendChild(title2)
}


const ul = document.querySelector('ul')
        const lists = document.querySelectorAll('li')
        for (const list of lists) {
            ul.removeChild(list)
        }