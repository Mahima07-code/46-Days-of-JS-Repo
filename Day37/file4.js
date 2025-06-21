// Closures Holding References

// 🔧 What happens:
// Closures remember the scope in which they were created. 
// If that scope contains heavy objects or DOM references, the closure holds on to them — 
// even if you don’t use them anymore.

// WRONG ❌
function createClosure() {
  const bigData = new Array(1000000).fill('🌟');
  return () => console.log('Hello');
}
const fn = createClosure(); // bigData stays in memory!


// RIGHT ✅
function createSafeClosure() {
  return () => console.log('Hello'); // no unnecessary references
}
