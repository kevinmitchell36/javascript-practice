
// EXAMPLES

// BREAK
for (let i = 0; i <= 20; i++ ) {
  if (i === 15) {
    console.log('Breaking...');
    break;
  }
  console.log(i);
}


// CONTINUE

for (let i = 0; i <= 20; i++) {
  if (i === 13) {
    console.log('Skipping 13...');
    continue;
  }
  console.log(i);
};







// PRACTICE PROBLEMS

// Write a while loop that will run forever until it reaches 1000.

for (let i = 0; i <= 2000; i++) {
  if (i === 1001) {
    break;
  }
  console.log(i);
};



// Write a loop that prints out every other number using a continue.

for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    continue;
  }
  console.log(i);
}