// Globals
const jokeDiv = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

function getJoke() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200 ) {
      const data = JSON.parse(this.responseText);
      jokeDiv.innerText = data.value;
    } else {
      jokeDiv.innerText = 'Something went wrong'
    }
  }
  xhr.send();
}


// Event listener
jokeBtn.addEventListener('click', getJoke);
document.addEventListener('DOMContentLoaded', getJoke);