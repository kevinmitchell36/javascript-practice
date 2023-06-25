// Falsy Values:
// false
// 0
// "" or ''  (Empty string no space)
// null
// undefined
// NaN


// Truthy Values:
// Everything else that is not falsy
// true
// '0' (0 as string)
// ' ' (space in a string)
// 'false' (false as a string)
// [] (empty array)
// {} (empty object)
// function () {} (empty function)


const children = 0

if (children) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter number of children'); // This line will print as 0 is considered falsy
}


if (children !== undefined) {
  console.log(`You have ${children} children`); // To fix the 'problem' above
} else {
  console.log('Please enter number of children'); 
}


const posts = [];

if (posts) {
  console.log(`List Posts - ${posts[0]} ${posts[1]}`); // This line runs as List Posts - undefined undefined
} else {
  console.log('No Posts To List');
}


if (posts.length > 0) {
  console.log(`List Posts - ${posts[0]} ${posts[1]}`); 
} else {
  console.log('No Posts To List'); // To fix the 'problem' above 
}