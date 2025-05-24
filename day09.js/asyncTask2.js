// Microtask Queue: Urgent Matters

// Some tasks are like boiling milk—they need immediate attention to prevent a mess. 
// In JavaScript, these are handled by Promises, which go into the Microtask Queue. 
// Microtasks have higher priority than regular tasks.

// Even though the cake has a setTimeout of 0 milliseconds, 
// the Promise (Boil milk) executes first because microtasks are prioritized over tasks in the Task Queue.

// The Event Loop: The Kitchen Coordinator
// The Event Loop is like your kitchen assistant who ensures everything runs smoothly. It constantly checks if the Call Stack is empty and then decides what to execute next:
// If the Call Stack is empty, it first processes all tasks in the Microtask Queue.
// Then, it takes the next task from the Task Queue and executes it.
// This cycle repeats, ensuring that your kitchen operates efficiently without any dish being neglected.

console.log('Start cooking');

setTimeout(() => {
  console.log('Cake is ready!');
}, 0);

Promise.resolve().then(() => {
  console.log('Boil milk');
});

console.log('Prepare pasta');
console.log('Serve pasta');
