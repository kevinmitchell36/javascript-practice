// Structure 
// for ([iterator]; [condition]; [increment/decrement])
      // {code to be executed};

// Ex:

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// };


// Nested loops

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   };
// };

// Loop through an array
const people = ['Kevin', 'Alice', 'Anllela', 'Tom']

for (let i = 0; i <= people.length; i++) {
  if (people[i] === 'Alice') {
    console.log(`${people[i]} is the best!!`);
  };
  console.log(people[i]);
};

