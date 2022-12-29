/* Write a program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive */
// Also ask the user does he want to play again

// Start
const canDrive = (age) => {
    return age >= 18 ? true : false;
}

let playAgain = true;
do {
    let age = prompt("Enter your age? ");

    age = Number.parseInt(age);

    if (canDrive(age)) {
        alert("Yes you can drive");
    }
    else {
        alert("You cannot drive");
    }

    playAgain = confirm("Do you want to play again");
} while (playAgain);


  // End