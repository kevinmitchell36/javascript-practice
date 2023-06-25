// WHILE LOOP EXAMPLE

let i = 0; // i is established outside of the loop and has global scope 

while (i <= 20) {
  console.log(`Number is ${i}`);
  i ++
}

// LOOP THROUGH AN ARRAY

const numbers = [10, 20, 30, 40, 50];
let j = 0
while (j < numbers.length) {
  console.log(numbers[j]);
  j++;
};


// NESTING LOOPS
let k = 0
while (k <= 5) {
  console.log(`Number is ${k}`);

  let j = 1;
  while (j <= 5) {
    console.log(`${k} * ${j} = ${k * j}`);
    j++;
  }
  k++;
}

// DO WHILE LOOP
// Will run at least once as the while condition is the last thing evaluated. 
let l = 20
do {
  console.log(`The Number is ${l}`);
  l++;
} while (i <= 20);


// PRACTICE PROBLEMS

// WRITE A LOOP THAT PRINTS AT LEAST ONCE EVEN WHEN THE CONDITION IS FALSE

let m = 30
do {
  console.log('Im still here')
  m++;
} while (m <= 30)


// Use a nested loop with two arrays of strings to create a new array of strings with each string combined.
// For example, ["a", "b", "c"] and ["d", "e", "f", "g"] becomes ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"].

const first_strings = ["a", "b", "c"];
const second_strings = ["d", "e", "f", "g"];
const combined_strings = []

let n = 0;
while (n < first_strings.length) {
  let o = 0
  while (o < second_strings.length) {
    combined_strings.push(first_strings[n] + second_strings[o])
    o++;
  }
  n++;
}

console.log(combined_strings);