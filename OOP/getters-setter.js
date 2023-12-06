const h1 = document.querySelector('h1');
h1.innerText = 'Getters & Setters';

class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  get firstName() {
    return this.capitalize(this._firstName);
  }

  set firstName(value) {
    this._firstName = this.capitalize(value)
  }

  get lastName() {
    return this.capitalize(this._lastName);
  }

  set lastName(value) {
    this._lastName = this.capitalize(value)
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const person1 = new Person('john', 'doe');
console.log(person1.firstName);
console.log(person1.lastName);
person1.firstName = 'jane';
person1.lastName = 'Smith';
console.log(person1);
console.log(person1.fullName);