/* Write a program to change the url to google.com redirect if user enters a greater than number 4*/

// Start
let number = prompt("Enter a number");
number = Number.parseInt(number);

if (number > 4) {
    location.href = "https://google.com";
}


// End