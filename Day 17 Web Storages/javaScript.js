// Storing string in a localStorage
localStorage.setItem('firstName', 'Asabeneh') // since the value is string we do not stringify it
console.log(localStorage)
// Storing number in a local storage
localStorage.setItem('age', 200)
console.log(localStorage)
// Storing an array in a localStorage. If we are storing an array, an object or object array, we should stringify the object first. See the example below.
const skills = ['HTML', 'CSS', 'JS', 'React']
//Skills array has to be stringified first to keep the format.
const skillsJSON = JSON.stringify(skills, undefined, 4)
localStorage.setItem('skills', skillsJSON)
console.log(localStorage)

// Storing an object in a localStorage. Before we storage objects to a localStorage, the object has to be stringified.

const user = {
    firstName: 'Asabeneh',
    age: 250,
    skills: ['HTML', 'CSS', 'JS', 'React']
  }
  
  const userText = JSON.stringify(user, undefined, 4)
  localStorage.setItem('user', userText)



//   Getting item 
let firstName = localStorage.getItem('firstName')
let age = localStorage.getItem('age')
let skill = localStorage.getItem('skills')
let skili = JSON.parse(skill)
console.log(firstName, age, skili)

localStorage.clear()