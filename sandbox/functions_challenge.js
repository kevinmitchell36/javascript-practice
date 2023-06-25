// CHALLENGE 3
(function (length, width){
  const area = length * width;
  console.log(area);
})(25, 69);

// CHALLENGE 1
function getCelsius (fahrenheit) {
  const conversion = (fahrenheit - 32) * 5 / 9;
  return conversion;
};

console.log(getCelsius(32));


// WITH ARROW FUNCTION IMPLICIT (NO {})
getCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9 ;

console.log(`The temperature is ${getCelsius(50)} \xb0c`);


// CHALLENGE 2

function minMax(numbers) {
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  return {
    min, 
    max
  }
 };

console.log(minMax([1, 2, 3, 4, 5])); 

