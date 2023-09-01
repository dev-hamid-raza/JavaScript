const newSet = new Set()
console.log(newSet)

// adding values in set 
for(let i = 0; i <= 10; i++) {
    newSet.add(i)
}
console.log(newSet)

newSet.delete(6)

console.log(newSet)

newSet.clear()
console.log(newSet)

const friends = ['khan','Husnain','Iqra','Momina','Muqaddas']

for(const friend of friends)
    newSet.add(friend)
console.log(newSet)

const countries = [
    ['Pakistan', 8],
    ['India', 5],
    ['England', 7]
]

const mapCountries = new Map(countries)
console.log(mapCountries)