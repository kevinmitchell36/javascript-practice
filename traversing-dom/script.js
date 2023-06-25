// // get child elements form parent
const parent = document.querySelector('.parent');
console.log(parent);

// // .children is a property on parent 
console.log(parent.children); // returns a list of child nodes

console.log(parent.children[1]); // returns 2nd child

console.log(parent.children[1].innerText); // returns the text of the 2nd child

console.log(parent.children[2].className); // returns the class name of the first child

console.log(parent.children[0].nodeName); //returns the tag name of the first child

parent.children[1].innerText = 'Child Two'; // changes text of the 2nd child

parent.children[2].style.color = 'red'; // changes the text of the 3rd child to be red


// // Get parent from child 
let childParentEx;

const child = document.querySelector('.child');

childParentEx = child.parentElement;

child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';
console.log(childParentEx); 


// // Sibling Elements 
let output; 

const secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem;
output = secondItem.nextElementSibling;

secondItem.nextElementSibling.style.color = 'green'; // Turn the next child from the 2nd to green
secondItem.previousElementSibling.style.color = 'orange'; // Turn the next child from the 2nd to green
console.log(output);