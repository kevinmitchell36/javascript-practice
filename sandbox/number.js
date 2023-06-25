const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

let sum = x + y;
let difference = x - y;
let product = x * y;
let quotient = x / y;
let rm = x % y;

console.log(`${x} + ${y} = ${sum}`);
console.log(`${x} - ${y} = ${difference}`);
console.log(`${x} * ${y} = ${product}`);
console.log(`${x} / ${y} = ${quotient}`);
console.log(`${x} % ${y} = ${rm}`);