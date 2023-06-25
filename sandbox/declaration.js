// addDollarSign can be called here because of hoisting - the functions are read and stored before the code is executed.
console.log(addDollarSign(100));

// FUNCTION DECLARATION 
function addDollarSign(value) {
  return '$' + value;
};

// FUNCTION EXPRESSION
const addPlusSign = function (value) {
  return '+' + value;
};

console.log(addPlusSign(200));
