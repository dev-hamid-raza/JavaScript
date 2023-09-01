const student = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
// const [name, skills, [htmlScore, cssScore, JSScore, reactScore]] = student
// console.log(name, skills, JSScore, reactScore)

for (const { name, capital, languages, population } of countries_data) {
    console.log(name, capital, languages, population)
}

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]
for (const [name, skills, scores] of students) {
    console.log(name, skills, scores)
}
console.log('-----------------')
const convertArrayToObject = (data) => {
    const arr = []
    for (const [name, skills, scores] of data) {
        arr.push({ name, skills, scores })
        // console.log(name, skills, scores)
    }
    return arr
}

console.log(convertArrayToObject(students))

const newStudent = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase: [
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience: ['Python', 'R', 'D3.js']
    }
}

const copyStudent = {...newStudent}
const {name, age, skills:{frontEnd, backEnd, dataBase, dataScience}} = copyStudent
frontEnd.push({skill: 'Bootstrap', level: 8})
backEnd.push({skill: 'Express', level: 9})
dataBase.push({skill: 'SQL', level: 8})
dataScience.push({skill: 'SQL'})
console.log(dataScience )