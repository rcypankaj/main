/* Keep adding numbers to the array in 1 unti; 0 is added to the array */

// Start
let arr = [1, 2, 5, 7, 9, 10, 15, 36, 4];
let x;
do {
    x = prompt("Enter a number");
    x = Number.parseInt(x);
    arr.push(x);
} while (x != 0);

console.log(arr);


// End