// This is a high-order function
function greetUser(callback) {
  const name = "Alexa";
  callback(name);
}

// This is a callback function
function sayHello(name) {
  console.log("Hello, " + name + "!");
}

// Call the high-order function with the callback
greetUser(sayHello);
