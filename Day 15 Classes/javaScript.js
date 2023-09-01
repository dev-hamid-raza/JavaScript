class PersonOne {
    // code goes here
  }
  const personOne = new PersonOne()
  console.log(personOne)


  class PersonTwo {
    constructor(firstName, lastName) {
      console.log(this) // Check the output from here
      this.firstName = firstName
      this.lastName = lastName
    }
  }
  
  const personTwo = new PersonTwo()
  
  console.log(personTwo)

  const person1 = new PersonTwo('Asabeneh', 'Yetayeh')

console.log(person1)

const person2 = new PersonTwo('Lidiya', 'Tekle')
const person3 = new PersonTwo('Abraham', 'Yetayeh')

console.log(person1)
console.log(person2)
console.log(person3)


class Person {
  constructor(
    firstName = 'Asabeneh',
    lastName = 'Yetayeh',
    age = 250,
    country = 'Finland',
    city = 'Helsinki'
  ) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
  }
}

const person4 = new Person() // it will take the default values
const person5 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person4)
console.log(person5)

class Person7 {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
}

const person6 = new Person7('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person7 = new Person7('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person6.getFullName())
console.log(person7.getFullName())

class Person8 {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
}

const person8 = new Person8('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person9 = new Person8('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person8.score)
console.log(person9.score)

console.log(person8.skills)
console.log(person9.skills)

class Person9 {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
}

const person10 = new Person9('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person11 = new Person9('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person10.getScore) // We do not need parenthesis to call a getter method
console.log(person11.getScore)

console.log(person10.getSkills)
console.log(person11.getSkills)

class Person10 {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
  set setScore(score) {
    this.score += score
  }
  set setSkill(skill) {
    this.skills.push(skill)
  }
}

const person13 = new Person10('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person14 = new Person10('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

person13.setScore = 1
person13.setSkill = 'HTML'
person13.setSkill = 'CSS'
person13.setSkill = 'JavaScript'

person14.setScore = 1
person14.setSkill = 'Planning'
person14.setSkill = 'Managing'
person14.setSkill = 'Organizing'

console.log(person13.score)
console.log(person14.score)

console.log(person13.skills)
console.log(person14.skills)


class Person12 {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
  set setScore(score) {
    this.score += score
  }
  set setSkill(skill) {
    this.skills.push(skill)
  }
  getPersonInfo() {
    let fullName = this.getFullName()
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`

    let formattedSkills = skills ? `He knows ${skills}` : ''

    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
    return info
  }
  static favoriteSkill() {
    const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
    const index = Math.floor(Math.random() * skills.length)
    return skills[index]
  }
  static showDateTime() {
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    let date = now.getDate()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    if (hours < 10) {
      hours = '0' + hours
    }
    if (minutes < 10) {
      minutes = '0' + minutes
    }

    let dateMonthYear = date + '.' + month + '.' + year
    let time = hours + ':' + minutes
    let fullTime = dateMonthYear + ' ' + time
    return fullTime
  }
}

console.log(Person12.favoriteSkill())
console.log(Person12.showDateTime())

class Student extends Person12 {
  saySomething() {
    console.log('I am a child of the person class')
  }
}

const s1 = new Student('Asabeneh', 'Yetayeh', 'Finland', 250, 'Helsinki')
console.log(s1)
console.log(s1.saySomething())
console.log(s1.getFullName())
console.log(s1.getPersonInfo())


class Student1 extends Person12 {
  constructor(firstName, lastName, age, country, city, gender) {
    // super(firstName, lastName, age, country, city)
    this.gender = gender
  }

  saySomething() {
    console.log('I am a child of the person class')
  }
  getPersonInfo() {
    let fullName = this.getFullName()
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`

    let formattedSkills = skills ? `He knows ${skills}` : ''
    let pronoun = this.gender == 'Male' ? 'He' : 'She'

    let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
    return info
  }
}

const s5 = new Student1(
  'Asabeneh',
  'Yetayeh',
  250,
  'Finland',
  'Helsinki',
  'Male'
)
const s6 = new Student('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female')
s5.setScore = 1
s5.setSkill = 'HTML'
s5.setSkill = 'CSS'
s5.setSkill = 'JavaScript'

s6.setScore = 1
s6.setSkill = 'Planning'
s6.setSkill = 'Managing'
s6.setSkill = 'Organizing'

console.log(s5)

console.log(s5.saySomething())
console.log(s5.getFullName())
console.log(s5.getPersonInfo())

console.log(s6.saySomething())
console.log(s6.getFullName())
console.log(s6.getPersonInfo())