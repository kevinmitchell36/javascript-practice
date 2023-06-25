// IF YOU HAVE ANOTHER FILE WITH THE SAME GLOBAL VARIABLE
// PRETEND THERE IS A FILE USING user AS A GLOBAL VARIABLE

(function () {
  const user = 'Anna'; // HERE WE CAN ENVOKE user
  console.log(user);
  const hello = () => console.log('Hello from the IIFE');
  hello(); // WE ARE CALLING A FUNCTION INSIDE OF THE IIFE
})();

hello(); // THIS WILL CRASH AS THE hello FUNCTION IS DECLARED INSIDE THE IIFE


// IIF WITH PARAMS

(function (name) {
  console.log('Hello ' + name);
})('Carrie'); // ARGUMENT IS PASSED IN HERE