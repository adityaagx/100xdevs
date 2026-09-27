// Asgmt 1

let color = "blue"
let height = 182
let likePizza = false

console.log(color, height, likePizza);

// Asgmt 2

function sum(a, b) {
    return console.log(a+b)
};

sum(5, 4);

// Asgmt 3

function canVote(age) {
    return age > 18 ? "canVote" : "cannotVote";
}

console.log(canVote(8));

// Asgmt 4

let number = 5;

if (number % 2 == 0) {
    console.log("This number is even")
} else {
    console.log("This number is odd")
};

// Asgmt 5

function sum(a) {
    let total = 0;
    for(let i=1; i <= a; i++){
        total = total + i;
    } return console.log(total);
};

sum(5090);

// Asgmt 6

function greet(user){
   return `Hello ${user.name}, age ${user.age}`
};

let user1 = {
    name: "aditya",
    age: 22,
    address: "ajmer" 
}

console.log(greet(user1));

// Asgmt 7

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

// Asgmt 8

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

// Asgmt 9

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