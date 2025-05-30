const numbers = [5, 6, 2, 3, 7];

// Using apply to pass an array of arguments
const max = Math.max.apply(null, numbers);

console.log(max); // Output: 7

