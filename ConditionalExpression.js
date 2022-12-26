// Conditional expressions in js.
// Start
let a = prompt("Enter the age");

// If- Else Statement
if (a < 0) {
  alert("This is invalid age");
}
else if (a < 10) {
  alert("You are a kid you can not even think of driving");
}
else if(a < 18 && a >= 10) {
  alert("You are a kid you can think of driving after 18");
}
else if(a >= 18) {
  alert("You can drive as you are above 18");
}
console.log("Done");


// Ternary Statement
console.log(a < 18 ? "Not Drvie" : "Drive");


// Switch Statement
const rollNo = prompt("Enter your roll no");

switch(rollNo) {
  case 1: console.log("Pankaj Yadav");
    break;
  case 2: console.log("Sujal Yadav");
  default: console.log(`${rollNo} is not a valid rollNo`);
}
// End