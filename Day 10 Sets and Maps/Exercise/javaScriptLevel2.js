const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const A = new Set(a)
const B = new Set(b)
const countries = ['Finland', 'Sweden', 'Norway']

// Getting Union of A and B 
const c = [...a,...b]
const union = new Set(c)
console.log(union)
// Intersection
const d = a.filter((element) => B.has(element))
const D = new Set(d)
console.log(D)
// Difference A - b
const e = a.filter((element) => !B.has(element))
const E = new Set(e)
console.log(E)