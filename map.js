const numbers = [1, 2, 3, 4, 5]

// Short syntax
const doubled = numbers.map((number) => number * 2);
console.log('Short syntax with parenthesis: ', doubled);

// Short syntax without parenthesis because there is only one param
const numbersMultiplied = numbers.map( number => number * 2);
console.log('Short syntax without parenthesis: ', numbersMultiplied);

// Long syntax with return and '=>' (no parenthesis needed as there is one param)
const timesTwo = numbers.map( number => {
 return number * 2
});
console.log('Long syntax (requires return) arrow function: ', timesTwo);

// Long syntax with return and function call (no '=>')
const byTwo = numbers.map(function(number) {
  return number * 2
});
console.log('Long syntax with return and function (no arrow): ', byTwo);

// PRACTICE PROBLEMS
const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004},
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008},
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007},
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010},
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014},
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010},
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996},
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016},
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989},
]


  // CREATE AN ARRAY OF COMPANY NAMES
const companyNames = companies.map( company => company.name);
console.log('CREATE AN ARRAY OF COMPANY NAMES: ', companyNames);

  // Create an array with just company and category

const companyCategory = companies.map( company => {
  return { 
    name: company.name,
    category: company.category
  }
});
console.log('Create an array with just company and category: ', companyCategory);

  // Create an array of the length of each company in years

const companyYears = companies.map( company => company.end - company.start)
console.log('Create an array of the length of each company in years: ', companyYears);

   // Create an array of object with the name the length of each company in years

const tenure = companies.map(function(company) {
  return {
    name: company.name,
    tenure: company.end - company.start
  };
});
console.log('Create an array of object with the name the length of each company in years: ', tenure);


// CHAIN MAP METHODS
const squareAndDouble = numbers
  .map((number) => Math.sqrt(number))
  .map((sqrt) => sqrt * 2);
console.log('Chain maps square root and double', squareAndDouble);

// Long hand version of squareAndDouble
const squareThenDouble = numbers
  .map(function(number) {
    return Math.sqrt(number);
  })
  .map(function(sqrt) {
    return sqrt * 2
  });

console.log('Long hand version of squareAndDouble', squareThenDouble);

// Chain filter and map
  // Square root all even numbers

const squareTheEvens = numbers
  .filter( number => number % 2 === 0)
  .map( evens => Math.sqrt(evens));
console.log('Square the evens numbers: ', squareTheEvens);