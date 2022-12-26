/* Demonstrate the use of swith case statement in javaScript */

// Start
let rollNo = prompt("Enter your rollNo? ");
const x = Number.parseInt(rollNo);

switch(x) {
  case 10:
    console.log("Your age is 10");
    break;
  case 12: 
    console.log("Your age is 12");
    break;
  default:
    console.log("This is not the valid age");    
}


// End