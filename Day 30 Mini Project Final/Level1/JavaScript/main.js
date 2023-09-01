// Getting Elements from DOM
const mainSection = document.querySelector('.main-section')
const nameButton = document.querySelector('#name')
const capitalButton = document.querySelector('#capital')
const populationButton = document.querySelector('#population')
const nameIcon = document.querySelector('#name-icon')
const capitalIcon = document.querySelector('#capital-icon')
const populationIcon = document.querySelector('#population-icon')
const search = document.querySelector('#search')
const visualSection = document.querySelector('.visual-section')
const mostTen = document.querySelector('.most-ten')
const foundH1 = document.querySelector('#found')
// main Countries Array 
let filterCountries = countries

filterCountries.forEach(a => {
})
// Function which is showing the Data

const showData = (countriesData) => {
    mainSection.innerHTML = ''
    countriesData.forEach(country => {
        // Creating main Box
        const box = document.createElement('div')
        box.classList.add('box')
        mainSection.appendChild(box)
        // Putting Flag in box
        const flag = document.createElement('div')
        flag.classList.add('image')
        flag.src = country.flag
        flag.style.background = `url(${country.flag})`
        flag.style.backgroundPosition = 'center'
        flag.style.backgroundSize = 'cover'
        box.appendChild(flag)
        // Name of the Country
        const countryName = document.createElement('h1')
        countryName.innerHTML = country.name
        box.appendChild(countryName)
        // creating Details Section
        const detailsSection =  document.createElement('div')
        detailsSection.classList.add('details')
        box.appendChild(detailsSection)
        // Capital of the country 
        const capital = document.createElement('p')
        capital.innerHTML = `Capital: ${country.capital}`
        detailsSection.appendChild(capital)
        // Languages of the countries
        const languages = document.createElement('p')
        languages.innerHTML = 'Languages: '
        for(let i = 0; i <= (country.languages.length -1); i++) {
            if(i == (country.languages.length -1)) {
                languages.innerHTML += `${country.languages[i]}`
            } else {
                languages.innerHTML += `${country.languages[i]}, `
            }
        }
        detailsSection.appendChild(languages)
        // Population of the Country 
        const population = document.createElement('p')
        population.innerHTML = `Population: ${country.population}`
        detailsSection.appendChild(population)
        })
        
}


// Dealing With Name button on click to perform some sort



nameButton.addEventListener('click', () => {
    // changing icon of the arrow on click
    nameIcon.classList.toggle('fa-arrow-down')
    nameIcon.classList.toggle('fa-arrow-up')
    // Performing Sorting
    if(nameIcon.classList.contains('fa-arrow-up')) {
        filterCountries.sort((a,b) => {
            let na = a.name.toLowerCase(),
                nb = b.name.toLowerCase()
            if(na > nb)
                return -1
            if(na < nb) 
                return 1
        })
    } else {
        filterCountries.sort((a,b) => {
            let na = a.name.toLowerCase(),
                nb = b.name.toLowerCase()
            if(na > nb)
                return 1
            if(na < nb) 
                return -1
        })
    }
    // showing the  countries
    showData(filterCountries)
})

// Dealing with Capital Button 

capitalButton.addEventListener('click', () => {
    if(capitalIcon.classList.contains('fa-arrow-down')) {
        // Changing the Icon
        capitalIcon.classList.remove('fa-arrow-down')
        capitalIcon.classList.add('fa-arrow-up')
        // Sorting
        filterCountries.sort((a,b) => {  
            let na = a.capital,
                nb = b.capital
            if(na > nb)
                return -1
            if(na < nb) 
                return 1
        })

    } else {
        // Changing the Icon
        capitalIcon.classList.add('fa-arrow-down')
        capitalIcon.classList.remove('fa-arrow-up')
        // sorting
        filterCountries.sort((a,b) => {
            let na = a.capital,
                nb = b.capital
            if(na > nb)
                return 1
            if(na < nb) 
                return -1
        })
    }
        showData(filterCountries)  
})

// Dealing with Population Button

populationButton.addEventListener('click', () => {
    if(populationIcon.classList.contains('fa-arrow-down')) {
        // Changing the Icon
        populationIcon.classList.remove('fa-arrow-down')
        populationIcon.classList.add('fa-arrow-up')
        // Sorting
        filterCountries.sort((a,b) => {
            return b.population - a.population
        })
    } else {
        // Changing the Icon
        populationIcon.classList.add('fa-arrow-down')
        populationIcon.classList.remove('fa-arrow-up')
        // Sorting
        filterCountries.sort((a,b) => {
            return a.population - b.population
        })
    }
    showData(filterCountries)
})

// Dealing With Search 
search.addEventListener('input' , () => {
    const string = search.value.toLowerCase()
    const searchedCountries = filterCountries.filter(country => country.name.toLowerCase().match(string))
    filterCountries = searchedCountries
    showData(filterCountries)
    let num = filterCountries.length
    foundH1.innerHTML = `${num} Result Found`
    if(num == 250) {
        foundH1.innerHTML = ``
        mostTen.innerHTML = '10 most populated countries in the word'
    }
    visualSection.innerHTML = ''
    createTable(population(num),7758589152)
    mostTen.innerHTML = 'Population of the Countries'
    filterCountries = countries
})

showData(filterCountries)


// Chart Section Starts Here

const allLanguages = []
countries.forEach(element => {
    const languages = element.languages
    languages.forEach((lang) => allLanguages.push(lang))
})
const langSet = new Set(allLanguages)
const totalLang = langSet.size


const countLang = (arr,number) => {
    const count = []
    langSet.forEach((element) => {
        const mostLang = {}
        const filterLang = allLanguages.filter((lang) => lang === element)
        const cun = filterLang.length
        mostLang[element] = cun
        count.push(mostLang)
        
    })
    count.sort((a,b) => {
        return Object.values(b) - Object.values(a)
    })
    const exactData = []
    for(let i = 0; i < number; i++) {
        exactData.push(count[i])
    }
    return exactData
}


// Population Function 

function population (number){
    const allPopulation = []
    let totalPopulation = 0
    filterCountries.forEach(element => {
        const obj = {}
        obj[element.name] = element.population
        allPopulation.push(obj)
        totalPopulation += element.population
    })


    allPopulation.sort((a,b) => {
        return Object.values(b) - Object.values(a)
    })


    const exactData = []
    for(let i = 0; i <= number -1 ; i++) {
        exactData.push(allPopulation[i])
    }
    exactData.unshift({World:7758589152})
    return exactData
}






const span = document.querySelector('span')
span.innerHTML = countries.length


// creating function 


function createTable (data,total) {
    data.forEach(element => {    
        const row = document.createElement('div')
        row.setAttribute('class', 'row')
        
        const name =  document.createElement('div')
        name.setAttribute('class', 'name')
        name.innerHTML = Object.keys(element)
        row.appendChild(name)
        
        const progress = document.createElement('div')
        progress.setAttribute('class', 'progress')
        row.appendChild(progress)
        
        const bar = document.createElement('div')
        bar.setAttribute('class', 'bar')
        // bar.style.transition = 'all 1s ease'
        setInterval(() => {
            bar.style.width = `${(Object.values(element)/total)*100}%`
        },100)
        // bar.innerHTML = `${Math.floor((Object.values(element)/total)*100)}%`
        progress.appendChild(bar)
        
        const number = document.createElement('div')
        number.setAttribute('class', 'number')
        let i = 0
        // const interval =  setInterval((as) => {
        //     if(i == Object.values(element)) 
        //         clearInterval(interval)
        //     number.innerHTML = i
        //     i += 1
        // }, 1);
        number.innerHTML = Object.values(element)
        row.appendChild(number)
        
        visualSection.appendChild(row)
    })
}
createTable(countLang(allLanguages,10),totalLang)



const pop = document.querySelector('.pop')
pop.addEventListener('click', () => {
    mostTen.innerHTML = '10 most populated countries in the word'
    visualSection.innerHTML = ''
    createTable(population(10),Object.values(population(10)[0]))
})


const lan = document.querySelector('.lan')
lan.addEventListener('click', () => {
    mostTen.innerHTML = '10 most spoken Languages in the word'
    visualSection.innerHTML = ''
    createTable(countLang(allLanguages,10),totalLang)
})