const fs = require('fs');

fs.readFile('notes.txt', 'utf-8', (err, data) => {
    if(err){
        console.log("Error reading file")
        return;
    } 

    const words = data.trim().split(' ')
    const totalWords = data.trim() === 0 ? 0 : words.length

    console.log(`Words count ${totalWords}`);
})