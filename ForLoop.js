/* For loop in javaScript. */

// Start
let sum = 0;
let num = prompt("Enter a number? ");
num = Number.parseInt(num);

for (let i = 0; i < num; i++) {
  sum += (i+1);
}

console.log("Sum of first " + num + " natural numbers is " + sum);

let obj = {
  Pankaj: 90,
  shubh: 45,
  shivika: 56,
  ritika: 57,
  shiv: 23
}

// For in loop
for (let a in obj) {
  console.log("Marks of " +a+" are "+ obj[a]);
}

// For of loop
for (let b of "Pankaj Yadav") {
  console.log(b)
}

// End