// getting Element from DOM ----- 
const resultSection = document.querySelector('.result-section')
const firstNameIn = document.querySelector('.first-name')
const lastNameIn = document.querySelector('.last-name')
const countryIn = document.querySelector('.country')
const playerScoreIn = document.querySelector('.player-score')
const addButton = document.querySelector('#add-player')
const error = document.querySelector('.error')
const editPlayer = document.querySelector('#edit-player')




// adding values into object 
addButton.addEventListener('click', () => {
    if (valid(firstNameIn.value, lastNameIn.value, playerScoreIn.value, countryIn.value)) {
        addData()
    }
})

const createList = () => {
    let i = 0
    resultSection.innerHTML = ''
    const players = getData()
    players.forEach(player => {


        // main Div---------
        const mainDiv = document.createElement('div')
        mainDiv.classList.add('result')
        resultSection.appendChild(mainDiv)

        const resultDiv = document.createElement('div')
        resultDiv.classList.add('name')
        mainDiv.appendChild(resultDiv)

        const nameHeading = document.createElement('h1')
        resultDiv.appendChild(nameHeading)
        nameHeading.innerHTML = player.firstName + ' ' + player.lastName

        const h2Heading = document.createElement('h2')
        resultDiv.appendChild(h2Heading)
        h2Heading.innerHTML = player.time

        const countryDiv = document.createElement('div')
        countryDiv.classList.add('country')
        mainDiv.appendChild(countryDiv)

        const countryHeading = document.createElement('h1')
        countryHeading.innerHTML = player.country
        countryDiv.appendChild(countryHeading)

        const scoreDiv = document.createElement('div')
        scoreDiv.classList.add('score')
        mainDiv.appendChild(scoreDiv)

        const scoreHeading = document.createElement('h1')
        scoreHeading.innerHTML = player.score
        scoreDiv.appendChild(scoreHeading)

        const pointsDiv = document.createElement('div')
        pointsDiv.classList.add('points')
        mainDiv.appendChild(pointsDiv)


        const deleteButton = document.createElement('button')
        deleteButton.value = i
        deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
        deleteButton.setAttribute('id', 'delete')
        pointsDiv.appendChild(deleteButton)

        const addButton = document.createElement('button')
        addButton.value = i
        addButton.innerHTML = '+5'
        addButton.setAttribute('id', 'add')
        pointsDiv.appendChild(addButton)

        const removeButton = document.createElement('button')
        removeButton.value = i
        removeButton.innerHTML = '-5'
        removeButton.setAttribute('id', 'remove')
        pointsDiv.appendChild(removeButton)

        const editButton = document.createElement('button')
        editButton.value = i
        editButton.innerHTML = '<i class="fa-solid fa-pencil"></i>'
        editButton.setAttribute('id', 'edit')
        pointsDiv.appendChild(editButton)
        i += 1
    })

    // Delete Button

    deleteButton = document.querySelectorAll('#delete')
    deleteButton.forEach(button => {
        button.addEventListener('click', () => {
            const index = +(button.value)
            console.log(index)
            const players = getData()
            players.splice(index, 1)
            console.log(players)
            saveData(players)
            createList()
        })
    })

    // add Five Score button 
    addFive = document.querySelectorAll('#add')
    addFive.forEach(button => {
        button.addEventListener('click', () => {
            const index = +(button.value)
            const players = getData()
            console.log(players)
            console.log(index)
            players[index].score += 5
            saveData(players)
            createList()
        })
    })
    // subtract Five Score button 
    removeFive = document.querySelectorAll('#remove')
    removeFive.forEach(button => {
        button.addEventListener('click', () => {
            const index = +(button.value)
            const players = getData()
            console.log(players)
            console.log(index)
            players[index].score -= 5
            saveData(players)
            createList()
        })
    })

    editButton = document.querySelectorAll('#edit')
    editButton.forEach(button => {
        button.addEventListener('click', () => {
            const index = +(button.value)
            const players = getData()
            firstNameIn.value = players[index].firstName
            lastNameIn.value = players[index].lastName
            countryIn.value = players[index].country
            playerScoreIn.value = players[index].score
            
            editPlayer.classList.remove('none')
            addButton.classList.add('none')

            editPlayer.addEventListener('click', () => {
                players[index].firstName = firstNameIn.value
                players[index].lastName = lastNameIn.value
                players[index].country = countryIn.value
                players[index].score =  playerScoreIn.value
                saveData(players)
                createList()
                editPlayer.classList.add('none')
                addButton.classList.remove('none')
            })

        })
    })
}

// Functions 
function showDateTime() {
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth() + 1
    const date = now.getDate()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    let second = now.getSeconds()
    if (hours < 10) {
        hours = '0' + hours
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }

    const dateMonthYear = date + '.' + month + '.' + year
    const time = hours + ':' + minutes + ':' + second
    const fullTime = dateMonthYear + ' ' + time
    return fullTime
}




if('playerData' in localStorage)
    createList()



// validation 
function valid(inputFirstName, inputLastName, inputScore, inputCountry) {
    if (inputFirstName == '' || inputLastName == '' || inputScore == '' || inputCountry == '') {
        error.innerHTML = 'Please fill all the entries correctly'
        return false
    } else {
        error.innerHTML = ''
        return true
    }
}

function addData() {
    if ('playerData' in localStorage) {
        const playerData = getData()
        playerData.push({
            firstName: firstNameIn.value,
            lastName: lastNameIn.value,
            country: countryIn.value,
            score: +(playerScoreIn.value),
            time: showDateTime()
        })
        const playerString = JSON.stringify(playerData)
        localStorage.setItem('playerData', playerString)
        createList()

    } else {

        const playerData = []
        playerData.push({
            firstName: firstNameIn.value,
            lastName: lastNameIn.value,
            country: countryIn.value,
            score: +(playerScoreIn.value),
            time: showDateTime()
        })
        saveData(playerData)
        createList()
    }
    firstNameIn.value = ''
    lastNameIn.value = ''
    countryIn.value = ''
    playerScoreIn.value = ''
}

function getData() {
    const players = JSON.parse(localStorage.getItem('playerData'))
    players.sort((a, b) => {
        return b.score - a.score
    })
    return players
}

function saveData(data) {
    const playerString = JSON.stringify(data)
    localStorage.setItem('playerData', playerString)
}
