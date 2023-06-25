// insertAdjacentElement (take in a positon)

function insertElement() {
  const filter = document.querySelector('.filter');
  
  const h1 = document.createElement('h1');
  h1.textContent = 'insertedHere';

  filter.insertAdjacentElement('afterend', h1);
}

// insertAdjecentText

function insertText() {
  const item = document.querySelector('li:first-child');

  item.insertAdjacentText('beforebegin', 'insertedText');
}

// insertAdjecentHTML
function insertHTML() {
  const clearBtn = document.querySelector('#clear');

  clearBtn.insertAdjacentHTML('beforebegin', '<h2>insertHTML</h2>');
}

// insertBefore

function insertBeforeItem() {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  li.textContent = 'insertBefore';

  const thirdItem = document.querySelector('li:nth-child(3)');

  ul.insertBefore(li, thirdItem)
}

insertElement();
insertText();
insertHTML();
insertBeforeItem();

/*
<!-- beforebegin -->
<p>
  afterbegin
  foo
  beforeend
</p>
<!-- afterend -->
*/