// Forgotten Timers/Intervals

// 🔧 What happens:
// When you use setInterval() or setTimeout() and don’t clear them, 
// they keep running and hold references to variables or DOM elements used inside them — 
// even if those elements are removed.

// WRONG ❌
const element = document.getElementById("box");

setInterval(() => {
  element.innerHTML = Date.now(); // still referencing "box"
}, 1000);


// RIGHT ✅
const interval = setInterval(() => {
  if (!document.getElementById("box")) {
    clearInterval(interval);
  }
}, 1000);
