const todo = {
  id: 1,
  title: 'Take out trash'
};

// Setting a variable to a value 
// const id = todo.id;

// Destructuring
// const { id } = todo
// Above you are grabbing the property and assigning in to the variable id
// console.log(id);

// Destructuring multiple
// Below you are creating two variables (id and title) and assiging them to the named properties
// const { id, title } = todo
// console.log(id, title);


// Destructuring Arrays
const numbers = [23, 67, 33, 49];

// This creates two variables called first and second that are automatically set to the first and second positions.

// const [first, second] = numbers;
// console.log(first, second);

// WITH SPREAD OPERATOR
// Creates variable called rest which is set to the remaining values as an array
const [first, second, ...rest] = numbers;
console.log(rest);