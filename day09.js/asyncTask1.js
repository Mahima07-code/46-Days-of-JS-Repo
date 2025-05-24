// Asynchronous Tasks: Dishes That Take Time

// Now, suppose you're baking a cake. You mix the batter and put it in the oven for 30 minutes. 
// You don't just stand there waiting; you move on to prepare other dishes. 
// In JavaScript, this is akin to setting a timer with setTimeout:

// Even though the cake takes 30 minutes, you continue cooking other dishes. 
// The setTimeout function schedules the cake's completion message to be handled later, allowing you to multitask.

// The Task Queue: Orders Up!
// When the oven timer dings (i.e., the setTimeout completes), the notification goes into the Task Queue. 
// The Event Loop checks this queue and, when the Call Stack is clear, it takes the next task (like removing the cake from the oven) and executes it.


console.log('Start cooking');

setTimeout(() => {
  console.log('Cake is ready!');
}, 1800000); 

console.log('Prepare pasta');
console.log('Serve pasta');
