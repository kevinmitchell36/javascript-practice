function Rectangle(name, width, height) {     // Constructor functions are always capitalized
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}

const rect1 = new Rectangle('Rectangle 1', 10, 10);   // instantiates a new Rectangle.

console.log(rect1);

// 1. A new object is created
// 2. The constructor function is called with the arguments that we passed in.
// 3. The 'this' keyword is set to the new empty object.
// 4. The new object is returned from the constructor function.