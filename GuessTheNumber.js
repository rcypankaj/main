/* Wriet a program to enter a number from the user until the correct number did not enter after this calculate the score. */

// Start

let randomNum = Math.floor(Math.random() * 100);
let chances = 0;
let x;

do {
    x = prompt("Enter a number");
    x = Number.parseInt(x);

    if (x > randomNum) {
        console.log("This is not right guess randomNum smaller then this");

    }
    else {
        console.log("This is not right guess randomNum grater then this");
    }
    chances++;
} while (x != randomNum);
console.log(100 - chances);

// End