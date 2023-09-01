
function personAccount(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.incomes = new Set();
    this.expenses = new Set();

    this.totalIncome = function () {
        let total = 0;
        for (let [amount, description] of this.incomes) {
            total += amount;
        }
        return total;
    };

    this.totalExpense = function () {
        let total = 0;
        for (let [amount, description] of this.expenses) {
            total += amount;
        }
        return total;
    };

    this.accountInfo = function () {
        return `${this.firstname} ${this.lastname}'s Account\n` +
            `Total Income: $${this.totalIncome()}\n` +
            `Total Expense: $${this.totalExpense()}\n` +
            `Account Balance: $${this.accountBalance()}`;
    };

    this.addIncome = function (amount, description) {
        this.incomes.add([amount, description]);
    };

    this.addExpense = function (amount, description) {
        this.expenses.add([amount, description]);
    };

    this.accountBalance = function () {
        return this.totalIncome() - this.totalExpense();
    };
}

// Example usage:
const johnDoe = new personAccount("John", "Doe");
johnDoe.addIncome(2000, "Salary");
johnDoe.addIncome(500, "Bonus");
johnDoe.addExpense(800, "Rent");
johnDoe.addExpense(300, "Groceries");

console.log(johnDoe.accountInfo());

