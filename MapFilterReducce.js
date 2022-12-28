/* Map Filter Reduce in JavaScript */

// Start

let arr = [52, 47, 25, 69, 2, 5, 6, 8];

// Array Map Method
let mapArr = arr.map((value, index, array) => {
    console.log(value, index, array);
    return value + 1;
})
console.log(mapArr);

// Array Filtered Method
let filteredArr = arr.filter((a) => {
    console.log(a);
    return a > 10;
})
console.log(filteredArr);

// Array reduce method
const reduceArr = (a, b) => {
    return a + b;
}

let finReduce = arr.reduce(reduceArr);
console.log(finReduce);

// End