//Write a function that takes an array of numbers as input, and returns a new array with only even values.
// Read about filter in JS

const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNum = numbers.filter(num => num % 2 === 0);

console.log(numbers);
console.log(evenNum);
