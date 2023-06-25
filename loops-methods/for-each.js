const socials = ['Twitter', 'LinkedIn', 'Tiktok', 'Instagram']

socials.forEach(function (item) {
  console.log(item);
})

// OR

socials.forEach((item) => console.log(item)); // One liner does not reguire {}


// CAN RECEIVE EXTRA ARGUMENTS 
socials.forEach((item, index, arr) => console.log(`${index} - ${item}`)); 


// SEPARATE FUNCTION AS CALLBACK

function logSocials(social) {
  console.log(social);
}

socials.forEach(logSocials);

// ARRAY OF OBJECTS
const socialObjects = [
  {name: 'Twitter', url: 'https://twitter.com'},
  {name: 'Facebook', url: 'https://facebook.com'},
  {name: 'LinkedIn', url: 'https://linkedin.com'},
  {name: 'Tiktok', url: 'https://tiktok.com'}
];


// PRACTICE PROBLEMS

// Make an array of objects to store the brand and model for 3 different laptops. Then print out the laptop's models.

const laptops = [
  {brand: 'Apple', model: 'M2'},
  {brand: 'Asus', model: 'Badass'},
  {brand: 'Dell', model: 'Youre getting a...'}
]

laptops.forEach((item) => console.log(item.model))