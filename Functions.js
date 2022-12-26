/* Functions in javaScript. */

// Start
const hello = () =>{
    console.log("Hello how are you");
    return "Hi";
  }
  
  console.log(hello());
  
  function onePlusAvg(x, y) {
    return (x + y) / 2;
  }
  
  const sum = (p, q) => {
    return p + q;
  }
  
  let a = 1;
  let b = 2;
  let c = 3;
  console.log("One plus Average of a and b is ", onePlusAvg(a, b));
  console.log("One plus Average of b and c is ", onePlusAvg(b, c));
  console.log("One plus Average of a and c is ", onePlusAvg(a, c));
  console.log(sum(9, 7))
  // End