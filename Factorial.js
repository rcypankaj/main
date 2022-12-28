/* Use reduce to calculate factorial of a given number */

// Start

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let x = arr.reduce((a, b) => {
    return a * b;
})

console.log(x);


// End