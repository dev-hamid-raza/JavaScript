console.log(true)
const student = {
    firstName: 'Asabeneh',
    lastName: 'Yetayehe',
    age: 250,
    isMarried: true,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python',]
}

const txt = JSON.stringify(student,['firstName', 'lastName', 'skills'], 4)
console.log(txt)