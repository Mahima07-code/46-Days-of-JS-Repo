//  Global Variables

// 🔧 What happens:
// When you assign a value to a variable without using let, const, or var, 
// JavaScript automatically attaches it to the window object (in the browser). 
// This means it lives forever until the page reloads.

// WRONG ❌
function leakyFunc() {
  leak = new Array(100000).fill('leak'); // no let/const = global!
}


// RIGHT ✅
function cleanFunc() {
  let leak = new Array(100000).fill('clean'); // properly scoped
}
