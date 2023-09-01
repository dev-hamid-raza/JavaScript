const catsAPI = 'https://api.thecatapi.com/v1/breeds'
fetch(catsAPI)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

const api = async () => {
    try {
        const response = await fetch(catsAPI)
        const data = await response.json()
        let catNames = ''
        data.forEach(element => {
            catNames += element.name + '\n'
        })
        console.log(catNames)
    }
    catch (err){
        console.log(err)
    }
}
api()