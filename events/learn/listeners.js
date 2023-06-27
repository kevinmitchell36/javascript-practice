// Select button with id of clear
const clearButton = document.querySelector('#clear');

// Javascript event listener that alerts the user when they press 'Clear All'
  clearButton.onclick = function () {
    alert('Clear all?');
  }

// Use event listener
  clearButton.addEventListener('click',  () => {
    alert('Clear All?');
  });


// Use custom method in event listener
  function onClear() {
    alert('Are you sure?');
  } 

  clearButton.addEventListener('click', onClear);


// Remove event 5 seconds after page loads

  setTimeout( ()=> clearButton.removeEventListener('click', onClear), 5000);
  // removeEventListener takes the event and the function as params


// Have alert automatically pop up after 5 seconds on page load

  setTimeout( () => clearButton.click(), 5000);
  // the .click function has the parenthesis which means it automatically runs


// Remove all items when selecting all clear
  const allItems = document.querySelectorAll('li');

  function clearAll() {
    alert('Are you sure?');
    allItems.forEach( (item) => item.remove()) 
  }  

  clearButton.addEventListener('click', clearAll);