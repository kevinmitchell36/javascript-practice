const h1 = document.querySelector('h1');
h1.innerText = 'bind() & this';

class App {
  constructor() {
    this.serverName = 'localhost';

    document.querySelector('button').addEventListener('click', this.getServerName.bind(this));
  }

  getServerName() {
    console.log(this.serverName);
  }  
}

const app = new App();