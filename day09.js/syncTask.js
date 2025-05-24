// Imagine you're hosting a dinner party, and your kitchen is the JavaScript engine. 
// You're the single chef responsible for preparing all the dishes (tasks) one at a time—that's your Call Stack. 
// Now, let's see how you manage cooking multiple dishes without burning anything, using the Event Loop, Task Queue, and Microtask Queue.

// The Call Stack: Your Cooking Station
// As the chef, you can only cook one dish at a time. When you start a recipe, it's like pushing a function onto the Call Stack. Once the dish is ready, you remove it from the stack and move on to the next recipe.

// Synchronous Tasks: Quick Recipes
// These are like simple dishes—say, making a salad. You start and finish them without interruption:


console.log('Start cooking');
console.log('Make salad');
console.log('Serve salad');
