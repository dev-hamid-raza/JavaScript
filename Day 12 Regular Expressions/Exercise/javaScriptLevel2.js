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