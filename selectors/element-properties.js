// let output;

// // Deprecated. Shows list of all DOM elements.
// output = document.all;

// output = document.documentElement;

// // Gets specific tag
// output = document.head;
// output = document.body;

// // Get children of particular element
// output = document.body.children;
// console.log(output);

// querySelectorAll()

const listItems = document.querySelectorAll('li');
console.log(listItems); // This returns a NodeList - much like an HTMl collection or array
console.log(listItems[1]); // Returns the 2nd li tag.
console.log(listItems[1].innerHTML);  // Returns all HTML nested within the 2nd li tag 


// Turn one li the color red
listItems[1].style.color = 'red'  

// Turn all li's the color red and remove the 2nd
listItems.forEach( (item, index) => {
  item.style.color = 'red'
  if (index === 1) {
    item.remove();
  }
});


// 