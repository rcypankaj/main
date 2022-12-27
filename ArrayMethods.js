/* Array Methods in JavaScript */

// Start

let number = [1, 2, 3, 34, 4, 10];
let number2 = number.toString();
console.log(typeof number2);
let c = number.join("_and");
console.log(c, typeof c);

// pop the element from the last of the array
let x = number.pop(); // x contains the popped element
console.log(number, x);

// push the element from the last of the array
let y = number.push(5); // y contains size of the array
console.log(number, y);

// shift the element from the first of the array
let a = number.shift(); // a contains shift element from the first
console.log(number, a);

// unshift the element from the first of the array
let z = number.unshift(7); // z contains unshift element from the first
console.log(number, z);

// End