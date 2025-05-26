// In Compilation Stage:
// When the JS engine sees a function being used many times, like this:

function add(a, b) {
  return a + b;
}

for (let i = 0; i < 1000000; i++) {
  add(5, 3); // called a million times!
}

// The engine goes:
// “Hmm 🤔... this add() function is used a LOT. Let me make a faster version of it.”

// 🛠️ How It Optimizes:
// -> JIT Compilation (Just-In-Time)
//        Compiles the function into machine code.
//        Runs it directly on the CPU.

// -> Inline Caching
//        Remembers variable types to avoid repeated checking.

// -> Dead Code Elimination
//        Removes code that’s never used.