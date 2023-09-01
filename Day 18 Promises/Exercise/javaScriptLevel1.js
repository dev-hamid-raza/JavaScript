const url = 'https://restcountries.com/v2/all'
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
.catch(err => console.log(err)  )


const languagesName = (...lang) => {
    const langArray = []
    lang.forEach(element => {
        // langArray.push(element.name)   
        element.forEach(innz => {
            langArray.push(innz.name)
        })
    })
    return langArray
}

const fetchData = async () => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        data.forEach(element => {
            console.log('Country:', element.name, 'Capital:', element.capital, 'Languages:',languagesName(element.languages), 'Population:', element.population, 'Area:', element.area)
        });

    }
    catch(err) {
        console.log(err)
    }
}
fetchData()
