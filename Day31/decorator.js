// ✅ Decorator Pattern

function greet(name) {
  return `Hello, ${name}`;
}

function excitedGreet(originalFunc) {
  return function (name) {
    return originalFunc(name) + "!!! 😄";
  };
}

const decoratedGreet = excitedGreet(greet);
console.log(decoratedGreet("Mahima")); 
