// reduce() – Combine everything
// Add all numbers together:

const numbers = [1, 2, 3, 4, 5];

const total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(total);