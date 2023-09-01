const personAccount = {
    firstname: "",
    lastname: "",
    incomes: new Set(),
    expenses: new Set(),

    totalIncome() {
        let sum = 0;
        for (const income of this.incomes) {
            sum += income.amount;
        }
        return sum;
    },

    totalExpense() {
        let sum = 0;
        for (const expense of this.expenses) {
            sum += expense.amount;
        }
        return sum;
    },

    accountInfo() {
        const totalIncome = this.totalIncome();
        const totalExpense = this.totalExpense();
        const accountBalance = totalIncome - totalExpense;

        return `Account Information\nName: ${this.firstname} ${this.lastname}\nTotal Income: $${totalIncome}\nTotal Expense: $${totalExpense}\nAccount Balance: $${accountBalance}`;
    },

    addIncome(description, amount) {
        this.incomes.add({ description, amount });
    },

    addExpense(description, amount) {
        this.expenses.add({ description, amount });
    },

    accountBalance() {
        const totalIncome = this.totalIncome();
        const totalExpense = this.totalExpense();
        return totalIncome - totalExpense;
    }
};

// Usage example
personAccount.firstname = "John";
personAccount.lastname = "Doe";
personAccount.addIncome("Salary", 3000);
personAccount.addExpense("Rent", 1000);
personAccount.addExpense("Groceries", 200);
console.log(personAccount.accountInfo());
