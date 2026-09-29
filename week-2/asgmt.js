// Asgmt 1 - variables

let color = "blue"
let height = 182
let likePizza = false

console.log(color, height, likePizza);

// Asgmt 2 - function

function sum(a, b) {
    return console.log(a+b)
};

sum(5, 4);

// Asgmt 3 - Ternary operator

function canVote(age) {
    return age > 18 ? "canVote" : "cannotVote";
}

console.log(canVote(8));

// Asgmt 4 - if/else

let number = 5;

if (number % 2 == 0) {
    console.log("This number is even")
} else {
    console.log("This number is odd")
};

// Asgmt 5 - for loop

function sum(a) {
    let total = 0;
    for(let i=1; i <= a; i++){
        total = total + i;
    } return console.log(total);
};

sum(5090);

// Asgmt 6 - Array

function greet(user){
   return `Hello ${user.name}, age ${user.age}`
};

let user1 = {
    name: "aditya",
    age: 22,
    address: "ajmer" 
}

console.log(greet(user1));

// Asgmt 7 - Template literal

function greetUser(user){

    let title = "Others"

    if(user.gender == "male"){
        title = "Mr"
    } else {
        title = "Mrs"
    };

    let isLegal = user.age

    if(isLegal>18){
       isLegal = "You can vote"
    } else {
       isLegal = "You cannpt vote"
    };

    return `Hi ${title} ${user.name}, your age is ${user.age}, ${isLegal}`
}

let user2 = {
    name: "adi",
    age: 22,
    gender: "male"
};

console.log(greetUser(user2));

// Asgmt 8 - Arrow function

function getAdults(users){
    return users.filter(user => user.age>18)
}

const users = [{
    name: "Aditya",
    age: 22,
    address: "Ajmer"
}, {
    name: "harkirat",
    age: 8,
    address: "Chandigarh"
}, {
    name: "Saurav",
    age: 25,
    address: "Jaipur"
}]

console.log(getAdults(users));

// Asgmt 9 - Filter fn

function getAdultMales(users){
    return users.filter(user => user.age>18 && user.gender == "male")
};

const users1 = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 20, gender: "male" },
  { name: "Charlie", age: 16, gender: "male" },
  { name: "David", age: 30, gender: "male" }
];

console.log(getAdultMales(users1))

// Asgmt 10 - for loop

function sum(n){
    let total = 0
    for(let i=1; i<=n; i++){
        total=total+i
    } return total
};

console.log(sum(6));
console.log("aditya"); 

// Asgmt 11 - Ternary operator

const add = (a, b) => a+b;
console.log(add(2,3))

// Asgmt 12 - fs.readFile

const fs = require("fs");

// const contents = fs.readFileSync("a.txt", "utf-8");
// console.log(contents);

//Asgmt 13 - Callback fn

function sum(a, b){
    return a+b;
}

function multiply(a, b){
    return a*b;
}

function doOperation(a, b, op){
    return op(a, b)
};

console.log(doOperation(7, 6, multiply));

// Asgmt 14 - setTimeout

function run(){
    console.log("i will run after 1 sec")
}

setTimeout(run, 1000);
console.log("i will run immediately")

// Asgmt 15 - Callback fn

function one(){
    console.log("one")
};

function second(){
    one()
    console.log("second")
};
second();

// Asgmt 16 - if/else

function calculateFinalPrice(price, customerType){

    let discountRate = 0;

    if(customerType == "VIP"){
        discountRate = 0.2;
    } if(customerType == "Regular"){
        discountRate = 0.1;
    } 

    let finalPrice = price * (1 - discountRate)

    if (price > 100){
        finalPrice = finalPrice-5
    } 
      return finalPrice
    }

console.log(calculateFinalPrice(120, "VIP"));
console.log(calculateFinalPrice(80, "Regular"));

// Asgmt 17 - Push

let cart = [10, 25, 50];

function addItem(cartArray, newItem){
    cartArray.push(newItem)
};

addItem(cart, 15)
console.log("Cart after adding 15", cart)

let savedCart = [...cart];
console.log(savedCart);

cart.push(100);

console.log("Final value of cart with 100", cart);
console.log("Unchanged savedCart", savedCart);

//Asgmt 18 - 

let isDarkMode = false;

function toggletheme(){
    isDarkMode = !isDarkMode

    if(isDarkMode){
        console.log("Current theme dark");
    } else{
        console.log("Current theme light");
    }
}

toggletheme();
toggletheme();
toggletheme();

// Asgmt 19 - Arrow fn

const addz = (a, b) => a+b;

console.log(addz(3,4));

// Asgmt 20 - Map fn

const numbers = [10, 20, 30];

const double = numbers.map(number => number * 2);

console.log(double);

// Asgmt 21 - Filter fn

const marks = [24, 56, 65, 73, 32];

const failStudents = marks.filter(mark => mark < 50);

console.log(failStudents);

// Asgmt 22 - Date fn

console.log(new Date().getDay());

// Asgmt 23 - .push

const shoppingList = ["Milk", "Eggs"];
shoppingList.push("Bread");

console.log(shoppingList);

// Asgmt 24 - .pop

const history = ["home", "about", "contact"];
const lastVisited = history.pop()

console.log(lastVisited);
console.log(history);

// Asgmt 25 - .unshift() & .shift()

const tasks = ["Task B", "Task C"];
tasks.unshift("Task A");
const completedTask = tasks.shift()

console.log(tasks);
console.log(completedTask);

// Asgmt 26 - .includes()

const userRoles = ["admin", "editor", "author"];
const isAllowed = userRoles.includes("subscriber");

console.log(isAllowed);

// Asgmt 27 - .find()

const products = [
  { id: 101, title: "Phone", price: 600 },
  { id: 102, title: "Laptop", price: 1200 },
  { id: 103, title: "Headphones", price: 150 }
];

const targetProduct = products.find(product => product.id === 102);
console.log(targetProduct);

// Asgmt 28 - .findIndex()

const productsz = [
  { id: 101, title: "Phone", price: 600 },
  { id: 102, title: "Laptop", price: 1200 },
  { id: 103, title: "Headphones", price: 150 }
];

const headphonesIndex = productsz.findIndex(product => product.title === "Headphones");
console.log(headphonesIndex);

// Asgmt 29 - slice()

const leaderboard = ["Alice", "Bob", "Charlie", "David", "Eve"];

const topThree = leaderboard.slice(0, 3);

console.log(topThree);
console.log(leaderboard);

// Asgmt 30 - .forEach()

const transactions = [100, -50, 200, -20];

transactions.forEach(transaction => {
    if(transaction<0){
        console.log("Deposit:", transaction)
    } else {
        console.log("Withdrawal:", transaction)
    }
});


