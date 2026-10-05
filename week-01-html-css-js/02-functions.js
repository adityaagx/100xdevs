//Write a function sum that finds the sum of two numbers.

function add(a, b){
    return a+b
};
console.log(add(4,2));

//Side quest - Try passing in a string instead of a number and see what happens?

console.log(add("Aditya", 21));

//Write a function called canVote that returns true or false if the age of a user is > 18

function canVote(age){
    if(age>18){
        return "canVote"
    } else{
        return "cannotVote"
    };
};

console.log(canVote(14));
console.log(canVote(23));