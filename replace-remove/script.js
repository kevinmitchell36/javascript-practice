// Using built-in method replaceWith()
  // Call on element => p.replaceWith('span')
  

  // Replace the first item
  function replaceFirstItem() {
    const firstItem = document.querySelector('li:first-child');

    const li = document.createElement('li');
    li.textContent = 'Eggs';

    firstItem.replaceWith(li);
  }

  replaceFirstItem();

  // Replace the second item 

  function replaceSecondItem() {
    const secondItem = document.querySelector('li:nth-child(2)');

    const li = document.createElement('li');
    li.textContent = 'Steak';
    

    secondItem.replaceWith(li);
  }

  replaceSecondItem();


  // Replace all non-vegan items 

  
  function replaceAllNonVegan() {
    const notVegan = ["Eggs", "Steak"]
    const allItems = document.querySelectorAll('li');
    const message = 'Not vegan';
    allItems.forEach( (item) => {
      console.log(item.textContent);
      if (notVegan.includes(item.textContent)) {
        item.textContent = message;
      }
    })
  }

  replaceAllNonVegan();
// Using built-in method replaceChild()

  // Replace title with h1 



const nonVegan = ["Eggs", "Steak"];
let list = ["Eggs", "Steak", "Oreos", "Milk"]; 

// list.forEach( (item, index) => {
//   if (nonVegan.includes(item)) {
//     item = "Not vegan";
//   }
// })

// for (let i = 0; i < list.length; i++) {
//   if (nonVegan.includes(list[i])) {
//         list[i] = "Not vegan";
//       }
// }

// console.log(list);