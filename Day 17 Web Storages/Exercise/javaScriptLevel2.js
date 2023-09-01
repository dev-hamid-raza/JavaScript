const student = {
    firstName: 'Hamid',
    lastName: 'Raza',
    age:    21,
    skills: ['HTML', 'CSS', 'JS', 'React JS'],
    country: 'Pakistan'
}
const data = JSON.stringify(student, undefined, 4)
localStorage.clear()
localStorage.setItem('Student', data)
console.log(localStorage)