// const div = document.createElement('div');
// div.className = 'my-element'; // set a class
// div.id = 'my-element'; // set an id


// const text = document.createTextNode('Hello World');
// div.appendChild(text);
// console.log(div);

// document.body.appendChild(div);

// document.querySelector('ul').appendChild(div);


// Challenge - create a functions that appends a new item to the shopping list
// Quick version
function createListItem(item) {
  const li = document.createElement('li')
  li.innerHTML = `${item}
  <button class="remove-item btn-link text-red">
    <i class="fa-solid fa-xmark"></i>
  </button>`
  document.querySelector('.items').appendChild(li);
}

createListItem('Black Beans');


// Cleaner version

function createNewItem(item) {
  const li = document.createElement('li');
  const button = document.createElement('button');
  const i = document.createElement('i');

  li.innerHTML = `${item}`
  button.className = 'remove-item btn-link text-red';
  i.className = 'fa-solid fa-xmark';

  button.appendChild(i);
  li.appendChild(button);

  document.querySelector('.items').appendChild(li);
}

createNewItem('Lentils');