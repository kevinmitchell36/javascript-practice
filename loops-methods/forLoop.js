// Structure 
// for ([iterator]; [condition]; [increment/decrement])
      // {code to be executed};

// Ex:

for (let i = 0; i <= 10; i++) {
  console.log(i);
};


// Nested loops

for (let i = 1; i <= 10; i++) {
  console.log(i);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  };
};

// Loop through an array
const people = ['Kevin', 'Alice', 'Anllela', 'Tom']

for (let i = 0; i <= people.length; i++) {
  if (people[i] === 'Alice') {
    console.log(`${people[i]} is the best!!`);
  };
  console.log(people[i]);
};


// PRACTICE PROBLEMS 
// # 1. Write a times loop to print the numbers 1 through 10.

for (let i = 1; i <= 10; i++) {
  console.log(i);
};

// # 2. Write a times loop that prints the word "hello" 5 times.

for (let i = 0; i <= 4; i++) {
  console.log('Hello');
}

// # 3. Write a times loop that prints the numbers 10 through 1.

for (let i = 10; i >= 1; i--) {
  console.log(i);
}
