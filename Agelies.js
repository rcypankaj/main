/* Use logical operators to find whether the age of a person lies between 10 and 20 */

// Start
let age = prompt("Enter your age");
age = Number.parseInt(age);

console.log((age > 10 && age < 20) ? "Age lies" : "Age does not lies");

// End