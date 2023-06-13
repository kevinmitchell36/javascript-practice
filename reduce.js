const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// With function call
const sum = numbers.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue
}, 0);
console.log('Sum array numbers:', sum);

// Short hand arrow function
const addEm = numbers.reduce( (acc, cur) => acc + cur, 0);
console.log('Short hand version with arrow function:', addEm);

// Default start value is 0
const allTogether = numbers.reduce( (acc, cur) => acc + cur);
console.log('Short hand version with arrow function:', allTogether);

// Using a function for loop
const and = () => {
  let acc = 0;
  for (const cur of numbers) {
    acc += cur
  }
  return acc
};
console.log('Using a for of loop:', and());

// Shopping cart

const cart = [
  { id: 1, name: 'Product 1', price: 130},
  { id: 2, name: 'Product 2', price: 150},
  { id: 3, name: 'Product 3', price: 175}
]
const subtotal = cart.reduce( (acc, cur) => acc + cur.price, 0)
console.log('Shopping cart:', subtotal);