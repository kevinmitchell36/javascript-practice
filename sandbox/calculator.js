
function calculator(num1, num2, operator) {
  if (operator === '+') {
    return num1 + num2;
  } else if (operator === '-') {
    return num1 - num2;
  } else if (operator === '*') {
    return num1 * num2;
  } else if (operator === '/') {
    return num1 / num2;
  } else {
    return "Not a valid operator"
  }
};


console.log(calculator(5, 2, '+'));
console.log(calculator(5, 2, '-'));
console.log(calculator(5, 2, '*'));
console.log(calculator(5, 2, '/'));
console.log(calculator(5, 2, '&'));



//        OR

function anotherCalculator(num1, num2, operator) {
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;   
    default:
      result = "Not a valid operator";
  }
  return result
};

console.log(anotherCalculator(5, 2, '+'));
console.log(anotherCalculator(5, 2, '-'));
console.log(anotherCalculator(5, 2, '*'));
console.log(anotherCalculator(5, 2, '/'));
console.log(anotherCalculator(5, 2, '&'));