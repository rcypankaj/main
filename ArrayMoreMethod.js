/* Array Methods in JavaScript */

// Start

let num1 = [1, 22, 3, 14, 5, 64, 70, 8, 9];
let num2 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
console.log(num1.length, num2.length);

// // for delete
// let deleted = delete num1[0];
// console.log(num1, deleted);
// console.log(num1.length);

// concatenate Array
let newArr = num1.concat(num2);
console.log(newArr);

// sort method
let compare = (a, b) => {
  return a-b;
}

num1.sort(compare);
console.log(num1);

// for reversing the array
num1.reverse();
console.log(num1);

// Splice method
let deletedValues = num1.splice(0, 4, 13, 12, 11, 10);
console.log(num1);
console.log(deletedValues);

// slice array
let newNum = num1.slice(2, 8);
console.log(newNum);

// End