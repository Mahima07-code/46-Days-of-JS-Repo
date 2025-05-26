// Example to explain the concept of setTimeout

console.log("1: Order chai");

setTimeout(() => {
  console.log("2: Boil water done");
}, 2000);

console.log("3: Cut ginger");


// **Explanation:  of the code output **

// 1. Takes the chai order ☕
// 2. Tells helper to boil water in 2 mins (background task)
// 3. Cuts ginger immediately
// 4. After 2 mins, helper returns: "Water’s ready!"
