// Getting Data from DOM 
const wrapper = document.querySelector('.wrapper')
wrapper.style.padding = '20px 200px'
// wrapper Div Styling 
wrapper.style.display = 'flex'
wrapper.style.alignItems = 'center'
wrapper.style.flexDirection = 'column'
// Random Color Generator 
const randomColor = () => {
    const string = '1234567890abcdef'
    let color = '#'
    for (let i = 0; i <= 5; i++) {
        const randomNumber = Math.floor(Math.random() * string.length)

        const letter = string.charAt(randomNumber)
        color += letter
    }
    return color
}

// Showing Date and time 
const showDateTime = () => {
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


// Main  Heading 
const mainHeading = document.createElement('h1')
mainHeading.innerHTML = asabenehChallenges2020.challengeTitle

wrapper.appendChild(mainHeading)

const year = document.createElement('span')
year.innerHTML = asabenehChallenges2020.challengeYear
mainHeading.appendChild(year)
setInterval(() => {
    year.style.color = randomColor()
}, 1000)

// main styling

year.style.fontSize = '80px'

// challenge heading 
const challengeHeading = document.createElement('h2')
challengeHeading.innerHTML = asabenehChallenges2020.challengeSubtitle
wrapper.appendChild(challengeHeading)

// Date and time
const dated = document.createElement('h3')
setInterval(() => {

    dated.innerHTML = showDateTime()
})
wrapper.appendChild(dated)
dated.style.padding = '15px'
dated.style.margin = '15px'
dated.style.backgroundColor = randomColor()
setInterval(() => {
    dated.style.backgroundColor = randomColor()
}, 1000)

// Creating Challenge Section
asabenehChallenges2020.challenges.forEach(element => {
    // Creating Row
    const row = document.createElement('div')
    row.setAttribute('class', 'row')
    row.style.display = 'flex'
    row.style.width = '100%'
    row.style.justifyContent = 'space-between'
    row.style.alignItems = 'center'
    row.style.backgroundColor = 'red'
    row.style.margin = '2.5px'
    row.style.padding = '30px 15px'
    wrapper.appendChild(row)
    //first Section
    const challengeName = document.createElement('div')
    challengeName.innerHTML = element.name
    row.appendChild(challengeName)
    //second section start
    const topicsNames = document.createElement('div')
    row.appendChild(topicsNames)
    // Creating Details Section
    const details = document.createElement('details')
    const summary = document.createElement('summary')
    const topicName = element.name.slice(10, element.name.length)
    summary.innerHTML = topicName
    summary.style.fontWeight = '800'
    details.appendChild(summary)
    topicsNames.appendChild(details)
    // Creating list for second Section
    element.topics.forEach(topic => {
        const list = document.createElement('li')
        list.innerHTML = topic
        list.style.listStyle = 'none'
        details.appendChild(list)
    })
    // second section End
    //last section
    const challengeStatus = document.createElement('div')
    challengeStatus.innerHTML = element.status
    row.appendChild(challengeStatus)
})
// upper two rows color changing 
const lists = document.querySelectorAll('.row')
lists.forEach(list => {
    list.style.backgroundColor = randomColor()
    // setInterval(() => {

    //     list.style.backgroundColor = randomColor()
    // }, 500)

})
// Full NameSection 
const fullName = document.createElement('h1')
const firstName = asabenehChallenges2020.author.firstName
const lastName = asabenehChallenges2020.author.lastName
fullName.innerHTML = `${firstName} ${lastName}`
wrapper.appendChild(fullName)
// social Media Section 
const socialLinks = document.createElement('div')
wrapper.appendChild(socialLinks)
// Social Media connecting 

asabenehChallenges2020.author.socialLinks.forEach(element => {
    const url = element.url
    const icon = element.fontawesomeIcon
    const link = document.createElement('a')
    link.setAttribute('href', url)
    link.innerHTML = icon
    link.style.fontSize = '42px'
    link.style.color = '#000'
    link.style.margin = '5px'
    socialLinks.appendChild(link)
})

// author Bio 
const bioDiv = document.createElement('div')
bioDiv.style.textAlign = 'center'
const bio = asabenehChallenges2020.author.bio

bioDiv.innerHTML = bio
wrapper.appendChild(bioDiv)

// education Section 
const education = document.createElement('div')
education.style.display = 'flex'
education.style.justifyContent = 'space-between'
education.style.width = '100%'
wrapper.appendChild(education)

// titles Box 
const titles = document.createElement('div')
education.appendChild(titles)

// inner Data in Titles 
asabenehChallenges2020.author.titles.forEach(element => {
    const titleRow = document.createElement('div')
    titleRow.style.display = 'flex'
    titleRow.style.alignItems = 'center'
    titles.appendChild(titleRow)

    const spanIcon = document.createElement('div')
    spanIcon.style.margin = '15px'
    spanIcon.innerHTML = element[0]
    titleRow.appendChild(spanIcon)

    const spanTitle = document.createElement('div')
    spanTitle.innerHTML = element[1]
    titleRow.appendChild(spanTitle)

})

// skill section 
const skillSection = document.createElement('div')
education.appendChild(skillSection)
// inner Data in Skill
asabenehChallenges2020.author.skills.forEach(skill => {
    const skillRow = document.createElement('div')
    skillRow.style.display = 'flex'
    skillRow.style.alignItems = 'center'
    skillSection.appendChild(skillRow)


    const skillIcon = document.createElement('div')
    skillIcon.innerHTML = '✅'
    skillIcon.style.margin = '15px'
    skillRow.appendChild(skillIcon)

    const skillTitle = document.createElement('div')
    skillTitle.innerHTML = skill
    skillRow.appendChild(skillTitle)
})

// qualification section 
const qualificationSection = document.createElement('div')
education.appendChild(qualificationSection)

// inner data in education 
asabenehChallenges2020.author.qualifications.forEach(element => {

    const qualificationFirstRow = document.createElement('div')
    qualificationFirstRow.style.display = 'flex'
    qualificationFirstRow.style.alignItems = 'center'
    qualificationSection.appendChild(qualificationFirstRow)

    const firstIcon = document.createElement('div')
    firstIcon.innerHTML = '📖'
    firstIcon.style.margin = '15px'
    qualificationFirstRow.appendChild(firstIcon)

    const firstTitle = document.createElement('div')
    firstTitle.innerHTML = element
    qualificationFirstRow.appendChild(firstTitle)
})

const keywords = document.createElement('h2')
keywords.style.textAlign = 'start'
keywords.style.width = '100%'
keywords.innerHTML = 'Keywords'
wrapper.appendChild(keywords)

const mainKeywordDiv = document.createElement('div')
wrapper.appendChild(mainKeywordDiv)

asabenehChallenges2020.keywords.forEach(keyword => {
    const keywordDiv = document.createElement('div')
    keywordDiv.style.display = 'inline-block'
    keywordDiv.style.backgroundColor = randomColor()
    keywordDiv.style.margin = '2.5px 15px'
    keywordDiv.style.padding = '5px 10px'
    keywordDiv.innerHTML = '#' + keyword
    keywordDiv.style.borderRadius = '15px'
    keywordDiv.style.fontSize = '20px'
    mainKeywordDiv.appendChild(keywordDiv)
})