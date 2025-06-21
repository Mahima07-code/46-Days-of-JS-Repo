// Detached DOM Elements

// 🔧 What happens:
// When you remove an element from the DOM, 
// but a JavaScript variable is still referencing it —
//  it’s “detached” but not gone.

// WRONG ❌
let cachedElement = document.getElementById("card");
cachedElement.remove(); // removed from DOM, but not from memory


// RIGHT ✅
cachedElement = null; // allow GC to clean it up
