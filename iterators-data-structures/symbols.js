const sym = Symbol();
const sym1 = Symbol('foo');
const sym2 = Symbol('bar');

console.log(sym, sym1, sym2); // Will print the Symbol type with identifier
console.log(typeof sym);  // Will result in symbol
console.log(sym.description);  // undefined
console.log(sym1.description); // foo

console.log(Symbol('sym') === Symbol('sym')); // false

// .for make the symbol enumerable
const sym3 = Symbol.for('foo');
const sym4 = Symbol.for('foo');  // Create new variable with reference

console.log(sym3 === sym4); // true

