
for (let number = 1; number <= 100; number++) {
  if (number % 15 === 0) {
    console.log('FIZZBUZZ');
  } else if (number % 3 === 0) {
    console.log('FIZZ');
  } else if (number % 5 === 0) {
    console.log('BUZZ');
  } else {
    console.log(number);
  }
}