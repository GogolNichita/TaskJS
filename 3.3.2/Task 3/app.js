const a = parseInt(prompt("Enter number a: "));
const b = parseInt(prompt("Enter number b: "));
const c = parseInt(prompt("Enter number c: "));

let max = (a > b ? (a > c ? a : c) : (b > c ? b : c)), min = (a < b ? (a < c ? a : c) : (b < c ? b : c));

console.log("Largest number: ", max ," smallest number: ", min);