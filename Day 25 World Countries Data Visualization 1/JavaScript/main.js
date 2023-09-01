const allLanguages = []
countries_data.forEach(element => {
    const languages = element.languages
    languages.forEach((lang) => allLanguages.push(lang))
})
// console.log(allLanguages)
const langSet = new Set(allLanguages)
const totalLang = langSet.size
// console.log(langSet)
// console.log(totalLang)

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

const population = (number) => {
    const allPopulation = []
    let totalPopulation = 0
    countries_data.forEach(element => {
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
    exactData.unshift({Word:totalPopulation})
    return exactData
}






const span = document.querySelector('span')
span.innerHTML = countries_data.length


// creating function 

const visualSection = document.querySelector('.visual-section')
const createTable = (data,total) => {
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

const mostTen = document.querySelector('.most-ten')

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