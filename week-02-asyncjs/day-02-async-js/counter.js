// Create a counter in JavaScript
// It should go up as time goes by in intervals of 1 second
// It should stop after 5 seconds

let ctr = 0
function counter() {
    ctr = ctr + 1
    console.log(ctr);
}

const cntr = setInterval(counter, 1000);

setTimeout(() => {
    clearInterval(cntr)
}, 5000);
