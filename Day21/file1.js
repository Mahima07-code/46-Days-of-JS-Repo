function outer() {
  let count = 0; // This is in the outer function's scope

  function inner() {
    count++; // inner() has access to count
    console.log(count);
  }

  return inner; // return the inner function
}

const counter = outer(); // outer() runs once, returns inner()

counter(); 
counter(); 
counter(); 
