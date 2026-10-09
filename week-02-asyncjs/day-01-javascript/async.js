const fs=require("fs");

fs.readFile("a.txt","utf-8",(err, data) => {
    if(err){
        console.log("There is an error", err)
    } else {
        console.log("File content :", data);
    }
});
fs.readFile("b.txt","utf-8",(err, data) => {
    if(err){
        console.log("There is an error", err)
    } else {
        console.log("File content :", data);
    }
});

console.log("I am First")