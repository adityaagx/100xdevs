/* Practice Problem: Build a Bank Account Class
Write a class named BankAccount with the following requirements:
Constructor: Takes accountHolder (string) and initial balance (number).
Method deposit(amount): Adds the amount to the balance and logs: "Deposited $X. New balance: $Y".
Method withdraw(amount): If amount is greater than balance, log: "Insufficient funds."
Otherwise, subtract amount and log: "Withdrew $X. New balance: $Y". */

class BankAccount {
    constructor(accountHolder, balance){
        this.accountHolder = accountHolder
        this.balance = balance
    };

    deposit(amount){
        this.balance = this.balance + amount
        return(`Deposited ${amount}. New balance: ${this.balance}`)
    };

    withdraw(amount){
        if(amount > this.balance){
            return("Insufficient funds")
        } else {
            this.balance = this.balance - amount
            return(`Withdraw ${amount}. New balace: ${this.balance}`)
        }
    }
}

const bankAccount1 = new BankAccount("Ram", 1250);
const bankAccount2 = new BankAccount("Shyam", 490);

console.log(bankAccount1.deposit(250));
console.log(bankAccount2.withdraw(76));