
// && - Will return the first FALSY value or the last value

         // Basic example
let a;

a = 10 && 20                 // => 20
a = 10 && 20 && 30           // => 30
a = 10 && 0 && 30            // => 0
a = 10 && '' && 0 && 30      // => ''
console.log(a);

       // Practical example
let posts = [];
posts.length > 0 && console.log(posts); // => Nothing

posts = ["Awesome!", "This looks rad!"]
posts.length > 0 && console.log(posts); // => ["Awesome!", "This looks rad!"]


// || - Will return the first TRUTHY value or the last value

let b;

b = 10 || 20;                       // => 10
b = 0 || 20;                        // => 20
b = 0 || null || '' || undefined;   // => undefined
console.log(b);


// ?? - Will return the right side operand when the left is null or undefined, otherwise it wil return the left side

let c;

c = 10 ?? 20;            // => 10
c = null ?? 20;          // => 20
c = undefined ?? 30;     // => 30 
c = 0 ?? 30;             // => 0
console.log(c);
