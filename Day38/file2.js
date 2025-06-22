// Partial Application

function greet(greeting, name) {
  return `${greeting}, ${name}`;
}

const sayHello = greet.bind(null, "Hello");
console.log(sayHello("Mahima")); 
