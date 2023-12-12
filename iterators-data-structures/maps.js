// keys can be anything

const myMap = new Map();

myMap.set('name', 'John');
myMap.set(1, 'blue');
myMap.set(2, 'red');

console.log(myMap.get('name'));
console.log(myMap.get(1));
console.log(myMap.get(2));

console.log(myMap.size); // return the length

console.log(myMap.has(1)); // true

myMap.delete(2);      // remove based on key

console.log(myMap);

const peopleMap = new Map();
peopleMap.set('brad', {phone: '550-555-5555', email: 'brad@mail.com'});
peopleMap.set('jill', {phone: '550-555-5555', email: 'jill@mail.com'});
peopleMap.set('jack', {phone: '550-555-5555', email: 'jack@mail.com'});

peopleMap.forEach((person) => {
  console.log(person);
})

console.log(peopleMap.keys());  // returns iterable
console.log(peopleMap.values()); // returns iterable