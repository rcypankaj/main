/* Array Loops in JavaScript */

// Start

let num1 = [1, 22, 3, 14, 5, 64, 70, 8, 9];

// classical for loop
for (let i = 0; i < num1.length; i++) {
    console.log(num1[i]);
}

// for each loop
num1.forEach((element) => {
    console.log(element * element);
})

// Arrayfrom method using convert in to array

let name = "Pankaj Yadav";
let newArr = Array.from(name);
console.log(newArr);

// for... of
for (let item of num1) {
    console.log(item);
}

// for.... in
for (let i in num1) {
    console.log(num1[i]);
}

// End