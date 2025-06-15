// ✅ Strategy Pattern 

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function calculate(strategy, a, b) {
  return strategy(a, b);
}

console.log(calculate(add, 2, 3));      // 5
console.log(calculate(multiply, 2, 3)); // 6
