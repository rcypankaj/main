/* Write a program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive */

// Start
let age = prompt("Enter your age? ");

age = Number.parseInt(age);

const canDrive = (age) => {
    return age >= 18 ? true : false;
}
if (canDrive(age)) {
    alert("Yes you can drive");
}
else {
    alert("You cannot drive");
}


// End