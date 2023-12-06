class Shape {
  constructor(name) {
    this.name = name
  }

  logName() {
    console.log('Shape name: ' + this.name);
  }
}

class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name);

    this.width = width;
    this.height = height;
  }
}

class Cirle extends Shape {
  constructor(name, radius) {
    super(name);

    this.radius = this.radius
  }

  logName() { // Will over write the parent
    console.log('Circle Name: ' + this.name);
  }
}

const rect = new Rectangle('Rect 1', 20, 20);
console.log(rect);
rect.logName();

const cir = new Cirle('Cir 1', 30);
cir.logName();

console.log(rect instanceof Rectangle);  // => true
console.log(rect instanceof Shape);      // => true