//  Side Effect

let count = 0;

function increaseCount() {
  count++; // This changes external state (side effect)
}

increaseCount();
console.log(count); // Output: 1
