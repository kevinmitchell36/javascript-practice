// Get input text box
const itemInput = document.getElementById('item-input');

const onKeyPress = () => {
  console.log('keypress')
}

itemInput.addEventListener('keypress', onKeyPress)


// Change inner text of the h1 tag to whatever is typed in the field

const whileTyping = (e) => {
  console.log(e.key);
  document.querySelector('h1').innerText = e.key;
}

itemInput.addEventListener('keydown', whileTyping);