//Create a function that takes an array of objects as input, and returns the users whose age > 18 and are male

const users = [
    { name : "Riha", age : 14, gender : "female"},
    { name : "Mahi", age : 25, gender : "male"},
    { name : "Shanu", age : 17, gender : "male"}
]

const maleAdult = users.filter(user => user.age > 18 && user.gender === "male");

console.log(users);
console.log(maleAdult);