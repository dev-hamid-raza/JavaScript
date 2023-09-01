// main heading creating

const mainHeading = document.createElement('h1')
document.body.appendChild(mainHeading)
mainHeading.innerHTML = 'WORLD COUNTRIES LIST'
// main heading styling
mainHeading.style.textAlign = 'center'

// total number heading

const totalHeading = document.createElement('h2')
totalHeading.innerHTML = 'Total Numbers of Countries: ' + countries.length
document.body.appendChild(totalHeading)

// styling 

totalHeading.style.textAlign = 'center'

// main container creating
const mainContainer = document.createElement('div')
document.body.appendChild(mainContainer)
// main container styling
mainContainer.style.display = 'grid'
mainContainer.style.gridTemplateColumns = 'repeat(10,100px)'
mainContainer.style.gap = '15px'
mainContainer.style.gridAutoRows = '100px'
mainContainer.style.justifyContent = 'center'
// generating box and adding data
countries.forEach(country => {
    const box = document.createElement('div')
    box.innerHTML = country
    mainContainer.appendChild(box)
    // styling
    box.style.border = '1px solid #000'
    box.style.display = 'flex'
    box.style.justifyContent = 'center'
    box.style.alignItems = 'center'
    box.style.textAlign = 'center'
})