/* Write a program to input a number until correct number not input */

// Start
console.log("Enter a number 5");

while(true) {
  let num = prompt("Enter a number?");
  num = Number.parseInt(num);
  
  if(num == 5) {
    break;
  }
  else {
    console.log("Wrong input: Try Again");
  }
}
console.log("You have input correct number");

// End