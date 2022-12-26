/* Write a program to find mean of the given number */

// Start

const mean = (a, b, c, d, e) => {
    return (a+b+c+d+e)/5;
  }
  let a = prompt("Enter Ist number");
  a = Number.parseInt(a);
  let b = prompt("Enter Second number");
  b = Number.parseInt(b);
  let c = prompt("Enter Third number");
  c = Number.parseInt(c);
  let d = prompt("Enter Fourth number");
  d = Number.parseInt(d);
  let e = prompt("Enter Fifth number");
  e = Number.parseInt(e);
  
  
  console.log(`${mean(a,b,c,d,e)} is the mean value`);
  
  // End