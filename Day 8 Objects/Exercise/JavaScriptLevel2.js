const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}





let maxValues = 0
let maxUser = ''
for (let user in users) {
    let comparingValues = users[user].skills.length
    if (comparingValues > maxValues) {
        maxValues = comparingValues
        maxUser = user
    }
}
console.log(maxUser)





let loginUsers = 0
let userPoint = 0
for (let user in users) {
    if (users[user].isLoggedIn)
        loginUsers++
    if (users[user].points >= 50)
        userPoint++
}
console.log(`Numbers of users are login: ${loginUsers}`)
console.log(`Numbers of users that are above the 49 points: ${userPoint}`)

let mernUser = ''
for (let user in users) {
    if (users[user].skills.includes('Node' && 'React' && 'Express' && 'MongoDB'))
        mernUser = user

}
console.log(mernUser)

const newUsers = { ...users };
newUsers.hamid = {
    email: 'hamid@hamid.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    age: 27,
    isLoggedIn: true,
    points: 70
};

console.log(newUsers);


let all = Object.entries(newUsers)
console.log(all)
console.log(Object.values(newUsers))


const personAccount = {
    firstName: "Hamid",
    lastName: "Raza",
    incomes: [],
    expenses: [],

    // Method to calculate the total income
    totalIncome: function () {
        let sum = 0;
        for (let income of this.incomes) {
            sum += income.amount;
        }
        return sum;
    },

    // Method to calculate the total expense
    totalExpense: function () {
        let sum = 0;
        for (let expense of this.expenses) {
            sum += expense.amount;
        }
        return sum;
    },

    // Method to display the account information
    accountInfo: function () {
        return `Name: ${this.firstName} ${this.lastName}, Total Income: ${this.totalIncome()}, Total Expense: ${this.totalExpense()}, Account Balance: ${this.accountBalance()}`;
    },

    // Method to add income
    addIncome: function (description, amount) {
        this.incomes.push({ description, amount });
    },

    // Method to add expense
    addExpense: function (description, amount) {
        this.expenses.push({ description, amount });
    },

    // Method to calculate the account balance
    accountBalance: function () {
        return this.totalIncome() - this.totalExpense();
    }
};

// Example usage
personAccount.addIncome("Salary", 5000);
personAccount.addIncome("Bonus", 1000);
personAccount.addExpense("Rent", 2000);
personAccount.addExpense("Groceries", 500);

console.log(personAccount.accountInfo()); // Output: Name: John Doe, Total Income: 6000, Total Expense: 2500, Account Balance: 3500
