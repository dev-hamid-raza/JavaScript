// Creating an empty set
const companies = new Set()
console.log(companies)

// Creating set from array
const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
]

const setOfLanguages = new Set(languages)
console.log(setOfLanguages)

//   Set is an iterable object and we can iterate through each elements.
for (const language of setOfLanguages) {
    console.log(language)
}

// Adding an element to a set
console.log(companies.size) // 0

companies.add('Google') // add element to the set
companies.add('Facebook')
companies.add('Amazon')
companies.add('Oracle')
companies.add('Microsoft')
console.log(companies.size) // 5 elements in the set
console.log(companies)

// We can also use loop to add element to a set.
// const companies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
// setOfCompanies = new Set()
// for (const company of companies) {
//   setOfCompanies.add(company)
// }

// Deleting an element a set

console.log(companies.delete('Google'))
console.log(companies.size) // 4 elements left in the set

// Checking an element in the set

console.log(companies.has('Apple')) // false
console.log(companies.has('Facebook')) // true

const langSet = new Set(languages)
console.log(langSet) // Set(4) {"English", "Finnish", "French", "Spanish"}
console.log(langSet.size) // 4

const counts = []
const count = {}

for (const l of langSet) {
    const filteredLang = languages.filter((lng) => lng === l)
    console.log(filteredLang) // ["English", "English", "English"]
    counts.push({ lang: l, count: filteredLang.length })
}
console.log(counts)


const numbers = [5, 3, 2, 5, 5, 9, 4, 5]
const setOfNumbers = new Set(numbers)

console.log(setOfNumbers)

// union of the sets 
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)

// intersection 
let d = a.filter((num) => B.has(num))
let D = new Set(d)

console.log(D)

// Difference of the sets 
let e = a.filter((num) => !B.has(num))
let E = new Set(e)



console.log(E)

// Creating map 
let map = new Map()
console.log(map)

let countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
]
map = new Map(countries)
console.log(map)
console.log(map.size)

//   Adding values to the Map
const countriesMap = new Map()
console.log(countriesMap.size) // 0
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap)
console.log(countriesMap.size)

// Getting a value from Map
console.log(countriesMap.get('Finland'))

// Getting all values from map using loop

for (const country of countriesMap) {
    console.log(country)
}

for (const [country, city] of countriesMap) {
    console.log(country, city)
}