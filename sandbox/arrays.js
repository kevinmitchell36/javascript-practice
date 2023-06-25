// const arr = [1, 2, 3, 4, 5];

// arr.reverse().unshift(6)

// arr.push(0);

// console.log(arr);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// arr2.shift();
// arr3 = arr1.concat(arr2);
// console.log(arr3);

// arr3 = [...arr1, ...arr2];
// arr3.splice(4, 1); 
// console.log(arr3);

let arr3 = arr1.slice(0,4).concat(arr2);
console.log(arr3);