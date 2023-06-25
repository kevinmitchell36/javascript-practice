// LOOPING THROUGH OBJECTS
const colorObj = {
  color1: 'red',
  color2: 'blue',
  color3: 'orange',
  color4: 'green',
};

for (const key in colorObj) {
  console.log(key);            // This will print just the keys
};

for (const key in colorObj) {
  console.log(colorObj[key]); // This will print just the values
};

// LOOPING THROUGH ARRAYS

const colorArr = ['red', 'green', 'blue', 'yellow']

for (const key in colorArr) {
  console.log(key);             // This will print the index position numbers
};

for (const key in colorArr) {
  console.log(colorArr[key]);   // This will print what is indexed
};


// PRACTICE PROBLEMS

// Make a object to store a book's title, author, number of pages, and language. Then print each attribute on separate lines.

book = {
  title: 'The Name Of The Wind',
  author: 'Patrick Rothfuss',
  pages: 726,
  language: 'en'
};

for (const attr in book) {
  console.log(attr, book[attr]);
}

// Make an array of hashes to store the title and author for 3 different books. Then print out the authors.

books = [
  {
    title: 'The Name Of The Wind',
    author: 'Patrick Rothfuss',
  },
  {
    title: 'The Lies Of Lock Lamora',
    author: 'Scott Lynch'
  },
  {
    title: 'Lord of the Rings',
    author: 'J.R.R Tolkein'
  }
]

for (const book in books) {
  console.log(books[book].author);
}