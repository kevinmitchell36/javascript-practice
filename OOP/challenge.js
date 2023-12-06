const h1 = document.querySelector('h1');
h1.innerText = 'Challenge';

function Player(name) {
  this.name = name,
  this.lvl =  1,
  this.points = 0;
}

Player.prototype.gainXP = function (xp) {
  this.points += xp;
  if (this.points >= 10) {
    this.lvl++;
    this.points -= 10
  }
} 

Player.prototype.describe = function () {
  return `${this.name} is level ${this.lvl} with ${this.points} experience points`;
}


const player1 = new Player('Bob');
const player2 = new Player('Alice');

player1.gainXP(4);
player2.gainXP(7);
player1.gainXP(5);
player2.gainXP(2);
player1.gainXP(1);
player2.gainXP(9);
player1.gainXP(4);
player2.gainXP(7);
player1.gainXP(8);
player2.gainXP(3);

console.log(player1.describe());
console.log(player2.describe());