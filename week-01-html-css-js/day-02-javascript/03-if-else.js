//Write an if/else statement that checks if a number is even or odd. 
//If it's even, print "The number is even." Otherwise, print "The number is odd."

function check(num){
    if(num % 2 === 0){
        return "The number is even"
    } else{
        return "The number is odd"
    };
};

console.log(check(4));
console.log(check(653));
console.log(check(53));
console.log(check(462));

