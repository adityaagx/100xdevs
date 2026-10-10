const fs = require('fs');

function fsReadFilePromisified(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf-8', (err, data) => {
      if (err) {
        reject(err); // Good practice to handle errors
      } else {
        resolve(data); // Resolves with the actual file content
      }
    });
  });
}

async function main() {
  try {
    const content = await fsReadFilePromisified('a.txt');
    console.log(content);
    console.log("Done reading file");
  } catch (error) {
    console.error("Error reading file:", error.message);
  }
}

main();
