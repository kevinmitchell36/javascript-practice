// ARROW FUNCTION
const add = (a, b) => {
  return a + b;
};


// IMPLICIT RETURN
const subtract = (a, b) => a - b;

  // SINGLE ARGUMENT DOES NOT REQUIRE ()
const double = a => a * 2


// RETURNING AN OBJECT - THE CODE BELOW WILL RETURN UNDEFINED
const createObjWrong = () => {
  name: 'Kevin'
};

// THIS RETURNS THE OBJECT
const createObjRight = () => ({
  name: 'Kevin'
});


const numbers = [1, 2, 3, 4, 5];
// forEach loop to print out numbers
numbers.forEach( function (n) {
  console.log(n);
});

// WITH ARROW FUNCTION FOR BREVITY
  // WILL NOT NEED SECOND ()
numbers.forEach(n => console.log(n));
// numbers.forEach((n) => console.log(n));

console.log(add(1, 2));
console.log(subtract(10, 5));
console.log(double(20));
console.log(createObjWrong());
console.log(createObjRight());