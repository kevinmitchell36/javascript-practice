const h1 = document.querySelector('h1');
h1.textContent = 'Static Methods';

class Rectangle {
  constructor(name, height, width) {
    this.name = name;
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width;
  }

  static getClass() {      // Available to the class not an instance.
    return 'Rectangle';
  }
}

const rect = new Rectangle('Rect', 10, 10);
console.log(rect.area());
// console.log(rect.getClass());      // Will result in error as it is called on the instance.
console.log(Rectangle.getClass());    // This works