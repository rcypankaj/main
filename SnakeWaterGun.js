let str = "SWG";
let cpu = Math.floor(Math.random() * str.length);

let user = prompt("Enter a character between S, W, or G");
const match = (cpu, user) => {
  if (cpu === user) {
    return "NoBody";
  }
  else if (cpu === "S" && user === "W") {
    return "CPU";
  }
  else if (cpu === "S" && user === "G") {
    return "User";
  }
  else if (cpu === "W" && user === "S") {
    return "User";
  }
  else if (cpu === "W" && user === "G") {
    return "CPU";
  }
  else if (cpu === "G" && user === "W") {
    return "User";
  }
  else if (cpu === "G" && user === "S") {
    return "CPU";
  }
}
let result = match(str.charAt(cpu), user);
console.log(result);
alert(`CPU: ${str.charAt(cpu)}, User: ${user} \n The winner is: ${result}`);