
// ||= assigns the right side value only if the left is falsy.

let a = false;

if (!a) {    
  a = 10;     // Will assign 10 to a if a is false
}

a = a || 10   // Assigns the right side value to a. a is 10

  // Short hand

a ||= 10      // Assigns the right side value to a. a is 10



// &&= assigns the right side value only if the left is truthy

let b = 10;

if (b) {
  b = 20;   // Will assign 20 to b if b is true
}

b = b && 20 // Assigns the right side value to a. a is 20

b &&= 20    // Assigns the right side to a. a is 20


// ??= assigns the right side value only if the left is null or undefined

let c = null;

if (c === null || c === undefined) {
  c = 20;                               // Will assign 20 to c if c is null or undefined
}

c = c ?? 20;                            // Assigns c to 20 as c is null

c ??= 20;                               // Assigns c to 20 as c is null

