/* Write a javaScript program to find whether a number is divisible by 2 and 3. */

// Start
let num = prompt("Enter a number? ");
num = Number.parseInt(num);

if (num % 2 == 0 && num % 3 == 0) {
  console.log(`${num} is divisible by 2 and 3`);
}
else {
  console.log(`${num} is not divisible by 2 and 3`);
}


// End