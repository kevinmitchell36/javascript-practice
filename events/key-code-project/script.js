// const keyList = document.querySelectorAll('.key');

// const keyStroke = (e) => {
//   const key = e.key;
//   const keyCode = e.keyCode;
//   const code = e.code;
//   keyList[0].innerText = key;
//   keyList[1].innerHTML = keyCode;
//   keyList[2].textContent = code;
// }

// const anyWhere = document.body;
// anyWhere.addEventListener('keydown', keyStroke);

function showKeyCodes(e) {
  const insert = document.getElementById('insert');
  insert.innerHTML = ' '

  const keyCodes = {
    'e.key': e.key === ' ' ? 'Space' : e.key,
    'e.keyCode': e.keyCode,
    'e.code': e.code
  }

  for (let key in keyCodes) {
    // Construct div
    const div = document.createElement('div');
    div.className = 'key';

    // Construct small
    const small = document.createElement('small');

    // Create text nodes
    const smallText = document.createTextNode(key);
    const divText = document.createTextNode(keyCodes[key]);
    console.log(divText);

    // Construct full element
    small.appendChild(smallText);
    div.appendChild(divText);
    div.appendChild(small);

    insert.appendChild(div);
  }
}

window.addEventListener('keydown', showKeyCodes)


