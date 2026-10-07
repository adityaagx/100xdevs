const fs=require("fs");
const contents=fs.readFile("a.txt","utf-8", (err, data) => {
    return console.log(data);
});
const data=fs.readFileSync("b.txt","utf-8")
console.log(contents);
console.log(data);  

