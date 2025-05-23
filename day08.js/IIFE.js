// IIFE – Immediately Invoked Function Expression

const counter = (function () {
  let count = 0;
  return {
    increment: function () {
      count++;
      return count;
    },
    reset: function () {
      count = 0;
    }
  };
})();                                        // the last parenthesis is used to call the function immediately 

console.log(counter.increment()); 
console.log(counter.increment()); 
counter.reset();
console.log(counter.increment()); 