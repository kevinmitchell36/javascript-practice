// function sayHello() {
//   console.log('Hello, is it me you\'re looking for?');
// };

// sayHello();


// function add(num1, num2) {
//   console.log(num1 + num2);
// };

// add(5, 10);

// function subtract(num1, num2) {
//   return num1 - num2;
// };

// console.log(subtract(10, 2)); 
// // OR
// const result = subtract(20, 5);
// console.log(result);


// DEFAULT PARAMETERS
// function registerUser(user = 'Bot') {
//   // if (!user) {
//   //   user = 'Bot';
//   // }
//   return user + ' is registered';
// };
// console.log(registerUser());


// REST PARAMETERS
// function sum(...numbers) {
//   let total = 0;
//   // for (let i = 0; i < numbers.length; i++) {
//   //   total = total + numbers[i];
//   // }
//   for (let num of numbers) {
//     total += num
//   };
//   return total;
// }

// console.log(sum(1, 2, 3, 4, 5));

// OBJECTS AS PARAMS
// function loginUser(user) {
//   return `${user.name} with the id of ${user.id} is logged in`;
// }

// const user = {
//   id: 1,
//   name: 'Alice'
// }

// console.log(loginUser(user));


// ARRAYS AS PARAMS
function randNumber(...numbers) {
  let index = Math.floor(Math.random() * numbers.length);
  console.log(index);
  return numbers[index];
};

console.log(randNumber(1, 2, 3));