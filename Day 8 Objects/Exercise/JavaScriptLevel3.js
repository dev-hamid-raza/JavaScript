// Create Person account abject 
const personAccount = {
    firstName: 'Hamid',
    lastName: 'Raza',
    incomes: [],
    expenses: [],
    // Calculating Total Income 
    totalIncome: function () {
        let sum = 0
        for (let income of this.incomes) {
            sum += income.amount
        }
        return sum
    },
    // calculating total Expense 
    totalExpense: function () {
        let sum = 0
        for (let expense of this.expenses) {
            sum += expense.amount
        }
        return sum
    },
    // creating account information function 
    accountInfo: function () {
        return `${this.firstName} ${this.lastName} have total income is ${this.totalIncome()} and expense is ${this.totalExpense()} with account balance ${this.accountBalance()}`
    },
    // Now adding the income
    addIncome: function (description, amount) {
        this.incomes.push({ description, amount })
    },
    // adding expenses in object 
    addExpense: function (description, amount) {
        this.expenses.push({ description, amount })
    },
    //  method of calculating account balance
    accountBalance: function () {
        let diff = this.totalIncome() - this.totalExpense()
        return diff
    }
}
//  Now for testing adding some values 
personAccount.addIncome('Salary', 25000)
personAccount.addIncome('bonus', 5000)
personAccount.addExpense('Fee', 1500)
personAccount.addIncome('other Expense', 7000)

// Checking Account Information 
console.log(personAccount.accountInfo())


// New Question >>>>>
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];



const signUp = (username, email, password) => {
    let isUserExist = userChecking(email)
    if (isUserExist == true)
        console.log(`user already exist Please use different Email address`)
    else {
        let _id = id()
        let createdAt = currentTime()
        let isLoggedIn = true
        users.push({ _id, username, email, password, createdAt, isLoggedIn })
    }
}
const currentTime = function () {
    const now = new Date()
    let day = `${now.getDate()}`
    let mon = `${now.getMonth() + 1}`
    let year = `${now.getFullYear()}`
    let hours = `${now.getHours()}`
    let min = `${now.getMinutes()}`
    if (day.length != 2)
        day = `0${day}`
    if (mon.length != 2)
        mon = `0${mon}`
    if (hours.length != 2)
        hours = `0${hours}`
    if (min.length != 2)
        min = `0${min}`

    return `${day}/${mon}/${year} ${hours}:${min}`
}
function id() {
    let string = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let id = ''
    for (let i = 0; i < 5; i++) {
        let random = Math.floor(Math.random() * (string.length + 1))
        id += string.charAt(random)
    }
    return id
}
const userChecking = (email) => {
    let result = false
    for (let id of users) {
        if (email == id.email)
            result = true
    }
    return result
}
// console.log(users[0]._id)
signUp('Hamid', "hamidramay2002@gmail.com", "hamid1122")
console.log(users)

// Now Creating the SignIn faction 
const signIn = (email, password) => {
    let result = false
    let login = false
    let pass = false
    for (let id of users) {
        if (email == id.email) {
            if(password == id.password){
                result = true
            if (id.isLoggedIn == true)
                login = true
            else
                id.isLoggedIn = true
            }
            else
                pass = true
        }
        if (result == true)
            break
    }
    console.log(pass)
    if(login == true)
        console.log("You already login")
    else if(result == true)
        console.log("You are Logged In")
    else if(pass == true)
        console.log("You Enter Incorrect password")
    else
        console.log("User Not Found")
}
signIn('hamidramay2002@gmail',"hamid1122")

console.log(users)

// Products management Application>>>>
const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]
const rateProduct = (productName,userId,rate) => {
    if(rate <= 5) {
        let result = true
            for(let counter of products)  {
                if(productName == counter.name)
                    counter.ratings.push({userId,rate})
                else
                    result = true
            }
        if(result == false)
            console.log(`This product is no exist`)
        else
            console.log(`Thanks for your rate`)
    } else
        console.log(`You Enter invalid Number please Rate between 0 to 5`)

}
rateProduct('TV',"ahsd",5)
console.log(products)
const averageRating = () => {
    let average = 0
    for(let counter of products) {
        console.log(counter.name)
        for(let innerCounter of counter.ratings) {
            average += innerCounter.rate
        }
            let CorrectResult = average / counter.ratings.length
    console.log(CorrectResult)
    }
}
averageRating()
// Like the produc Code is here
const likeProducts = (userID, productName) => {
    for(let counter of products) {
        if(productName == counter.name) {
            if(counter.likes.includes(userID)) {
                let index = counter.likes.indexOf(userID)
                counter.likes.splice(index,1)
            }
            else {
                counter.likes.push(userID)
            }
        }
    }
}
likeProducts("hamid","TV")
console.log(products)
likeProducts("hamid","TV")
console.log(products)