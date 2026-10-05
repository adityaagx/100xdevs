//Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

const users = [
    { name : "Riha", age : 14},
    { name : "Mahi", age : 25}
]
const checkAdult = users.filter(user => user.age > 18);

console.log(users);
console.log(checkAdult);

