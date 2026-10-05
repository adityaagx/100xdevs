//Write a function that takes a user as an input and greets them with their name and age

user1 = {
    name: "Aditya",
    age: 22,
    gender: "male",
    city: "Ajmer"
};

function greet(user){
    return `Hello ${user.name}, your age is ${user.age}`
};

console.log(greet(user1));

//Write a function that takes a new object as input which has name , age and gender and 
// greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

function greets(user){
    if(user.gender === "male"){
        return `Hi Mr ${user.name}, your age is ${user.age}`
    } else if(user.gender === "female"){
        return `Hi Mrs ${user.name}, you age is ${user.age}`
    } else if(user.gender === "Others"){
        return `Hi Others ${user.name}, you age is ${user.age}`
    }
};

console.log(greets(user1));

//Also tell the user if they are legal to vote or not

function canVote(user){
    if(user.age > 18){
        return "You can vote"
    } else {
        return "You cannot vote"
    }
};

console.log(canVote(user1));