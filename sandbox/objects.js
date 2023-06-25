const library = [
  {
    title: "Name Of The Wind",
    author: "Patrick Rothfuss",
    status: {
      own: true,
      reading: false,
      read: false,
    }
  },
  {
    title: "The Lies Of Locke Lamora",
    author: "Scott Lynch",
    status: {
      own: true,
      reading: false,
      read: false,
    }
  },
  {
    title: "Mistborn",
    author: "Brandon Sanderson",
    status: {
      own: true,
      reading: false,
      read: false,
    }
  }
]

library.forEach( (book) => {
  book.status.read = true
});

console.log(library);


const { title: firstBook } = library[0];

console.log(firstBook);

const stringLibrary = JSON.stringify(library);
console.log(stringLibrary);