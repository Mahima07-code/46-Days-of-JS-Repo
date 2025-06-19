// 🧠 Structured Cloning
// The structuredClone() method creates a deep clone of most data types in JavaScript.
// It handles Date, Map, Set, ArrayBuffer, RegExp, even circular references.


const original = { a: 1, b: { c: 2 } };
const clone = structuredClone(original);

console.log(clone.b === original.b); // false – it's deeply cloned!
