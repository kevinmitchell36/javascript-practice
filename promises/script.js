// Create promise, async, none blocking
const promise = new Promise( (resolve, reject) => {     // takes a callbacks to handle request and error
  // Simulate async task using setTimeout
  setTimeout(() => {
    console.log('Async task complete');
    resolve(); // Call the resolve call back to end the request
  }, 1000);
});

// Handle promise
promise.then(() => {  // Anything passed into resolve can be brought in here via the () as argument
  console.log('Promise consumed...');
});

const getGirlfriend = new Promise( (resolve, reject) => {     
  setTimeout(() => {
    let error = false;  // Flag to simulate error 
    if (!error) { 
      resolve({fname: "Sophie", lname: "Mitchell" });
    } else {
      reject('Error: Something went wrong')
    }
  }, 1000);
})

getGirlfriend.then((whateverIsInTheResolve) => console.log(whateverIsInTheResolve))  // Attach .then to the promise directly
             .catch((whateverIsInTheReject) => console.log(whateverIsInTheReject))  // Handle reject error
             .finally(() => console.log('Promise resolved or rejected'));           // Runs regardless of result 
console.log('Hello from global scope');

