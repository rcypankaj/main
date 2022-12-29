// Console Objects Method

// Start
console.error("error message");
console.log("log");
console.warn("Warning");
console.info("Info");
console.assert("err" != false);
console.assert("err" == false);

// calculate the for loop time
console.time("forLoop");
for (let i = 0; i < 10; i++);

console.timeEnd("forLoop");

// calculate the while loop time
console.time("whileLoop");
let i = 0;
while (i < 10) {
    i++;
}
console.timeEnd("whileLoop");
// End