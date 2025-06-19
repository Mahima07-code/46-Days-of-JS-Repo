// Shallow cloning
// Using Spread Operator (...)


const original = { name: "Alice", age: 25 };
const clone = { ...original };

console.log(clone); // { name: "Alice", age: 25 }
console.log(clone === original); // false
