const set = new Set([1, 2, 3, 3, 4, 4, 4]); // Will not allow duplicates

set.add(5);  // adds a 5 to the set
set.add(5);  // won't be added because duplicate

console.log(set.has(3));  // returns true

set.delete(5);

console.log(set); 

const setArray = Array.from(set);
console.log(setArray);