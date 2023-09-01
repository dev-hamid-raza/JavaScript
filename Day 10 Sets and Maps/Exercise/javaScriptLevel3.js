const allLanguages = []
countries_data.forEach(element => {
    const languages = element.languages
    languages.forEach((lang) => allLanguages.push(lang))
})
console.log(allLanguages)
const langSet = new Set(allLanguages)
const totalLang = langSet.size
console.log(langSet)
console.log(totalLang)

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
        if(Object.values(a) < Object.values(b)) return 1
        if(Object.values(a) > Object.values(b)) return -1
        
        return 0
    })
    const exactData = []
    for(let i = 0; i < number; i++) {
        exactData.push(count[i])
    }
    return exactData
}
console.log(countLang(allLanguages,10))