// LOOP THROUGH ARRAY
const items = ['book', 'table', 'chair', 'kite']

for (const item of items){
  console.log(item);
};

// LOOP THROUGH OBJECT
const users = [{name: 'Kevin'}, {name: 'Brad'}, {name: 'Alice'}];

for (const user of users) {
  console.log(user.name);
};

// LOOP THROUGH STRING
const string = 'Hello World';

for (const letter of string) {
  console.log(letter);
}

// LOOP THROUGH MAPS
const map = new Map();
map.set('name', 'Alice');
map.set('age', 38);

for (const [key, value] of map) {
  console.log(key, value);
};



// PRACTICE PROBLEMS
// Make a object to store a person's first name, last name, and email address. Then print each attribute on separate lines.

const person = new Map()
person.set('first_name', 'Sophie')
person.set('last_name', 'van Oostenbrugge')
person.set('email', 'sophie@example.com')

for (const [key, value] of person) {
  console.log(value)
}




// Make an array of hashes to store the first name and last name for 3 different people. Then print out the first person's info.

people = [
  {first_name: 'Sophie', last_name: 'van Oostenbrugge'},
  {first_name: 'Alice', last_name: 'Matos'},
  {first_name: 'Jeremy', last_name: 'Ethier'}
]

for (const person of people) {
  console.log(person.first_name);
}