const h1 = document.querySelector('h1');
h1.innerText = 'Private Properties';

class Wallet {
  
  #balance = 0;
  #transactions = [];

  deposit(amount) {
    this.#processDeposit(amount);
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log('Not enough funds');
      return;
    }
    this.#processWithdraw(amount);
    this.#balance -= amount;
  }

  #processDeposit(amount) {
    console.log(`Despositing ${amount}`);

    this.#transactions.push({
      type: 'desposit',
      amount
    })
  }

  #processWithdraw(amount) {
    console.log(`Withdrawing ${amount}`);

    this.#transactions.push({
      type: 'withdraw',
      amount
    })
  }

  get balance() {
    return this.#balance;
  }

  get transactions() {
    return this.#transactions;
  }
}

const wallet = new Wallet();
wallet.deposit(300);
wallet.withdraw(50);
console.log(wallet.balance);
console.log(wallet.transactions);