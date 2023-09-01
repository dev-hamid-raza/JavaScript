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
const paragraph = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
tenMostFrequentWords(paragraph,3)