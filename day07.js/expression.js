console.log(sayHi());           // ReferenceError: Cannot access 'sayHi' before initialization 

// * You're using a function expression assigned to a const.
// * *const (and let) are not hoisted* the same way as var or function declarations.
// * So when JavaScript sees sayHi() at the top, it knows sayHi exists but it hasn’t been initialized yet → BOOM 💣 — ReferenceError.

// Function Expression
const sayHi = function() {
  return "Hi";
};
let value = sayHi();
console

// EXPLANATION :-

// This is a function expression — it creates a function and stores it in a variable.
// It’s not hoisted like declarations — you must define it before you call it.