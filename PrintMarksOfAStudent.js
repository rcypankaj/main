/* Write a program to print the marks of a student in an object using for loop */

// Start
const marks = {
    Hindi: 50,
    English: 56,
    Science: 70,
    Math: 92,
    Computer: 99
  }
  
  for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log("Marks of "+ Object.keys(marks)[i]+ " is "+ Object.keys(marks)[i]);
  }
  
  console.log();
  
  // using for in loop
  for (let key in marks) {
    console.log("Marks of "+ key+ " is "+ marks[key]);
  }
  
  
  // End