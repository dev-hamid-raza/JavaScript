const question = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
const number = question.match(/\d+/gi)
const totalAnnualSalary = +number[0] * 12
const Bonus = +number[1]
const totalAnnualOnlineCourses = +number[2] * 12
const totalAnnualIncome = totalAnnualSalary + Bonus + totalAnnualOnlineCourses
console.log(totalAnnualIncome)

// Question Number 2
const question2 = `The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.`
const points = question2.match(/-\d+|\d+/g)
points.sort((a, b) => a - b)
console.log(points)

// variable checking 
const pattern = /^[0-9]|(-)/g
const is_valid_variable_name = (name) => !pattern.test(name)
console.log(is_valid_variable_name('hamidraza'))

const tenMostFrequentWords = (string, length) => {
    const filter = paragraph.replace(/^\w\s/g, '')
    const words = filter.split(' ')
    const frequentWords = {}
    const frequentWordsArray = []
    words.forEach((word => {
        if(word !== '') {
            if(frequentWords[word]) {
                frequentWords[word]++
            }
            else {
                frequentWords[word] = 1
            }
        }
    }))
    const mainData = []
    const entries = Object.entries(frequentWords)
    entries.forEach((element) => {
        const word = element[0]
        const count = element[1]
        mainData.push({word, count})
    })
    mainData.sort((a, b) => {
        if(a.count < b.count) return 1
        if(a.count > b.count) return -1
        return 0
    })
    for(let i = 0; i < length; i++)
    {
        console.log(mainData[i])
    }
}
const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
tenMostFrequentWords(paragraph,3)