// 📌 1. Partial Application

function multiply(a, b, c) {
  return a * b * c;
}

function partialMultiplyBy2(b, c) {
  return multiply(2, b, c);
}

console.log(partialMultiplyBy2(3, 4)); // 24
