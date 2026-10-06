// setTimeout function

function greet(){
    console.log("Hello world")
};

setTimeout(greet, 1500);
console.log("i will come first");

// fs.readFile function

const fs = require('fs');
fs.readFile('greeting.txt', 'utf-8', (err, data) => {
    if(err){
        console.error("Failed to read greeting");
        return;
    } 
    
    const words = data.trim() ? data.trim().split(/\s+/) : [];

    console.log(`Word count ${words.length}`);
});

