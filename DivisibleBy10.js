/* Filter the number divisible by 10 from a given array */

// Start

let arr = [1, 2, 5, 7, 9, 10, 15, 36, 40];
let x = arr.filter((a) => {
    return a % 10 == 0;
})

console.log(x);


// End