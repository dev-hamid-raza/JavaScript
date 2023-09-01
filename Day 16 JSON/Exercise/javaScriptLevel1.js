console.log(true)
const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']
let age = 250;
let isMarried = true
const student = {
    firstName: 'Asabeneh',
    lastName: 'Yetayehe',
    age: 250,
    isMarried: true,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python',]
}

const txtOne = JSON.stringify(skills, undefined, 1)
console.log(txtOne)

const txtTwo = JSON.stringify(age, undefined, 1)
console.log(txtTwo)

const txtThree = JSON.stringify(isMarried, undefined , 1)
console.log(txtThree)
const txtFour = JSON.stringify(student, undefined, 1)
console.log(txtFour)