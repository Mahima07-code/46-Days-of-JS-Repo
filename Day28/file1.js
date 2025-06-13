// O(n) - Linear
function printAll(arr) {
  arr.forEach(item => console.log(item));
}

// O(n²) - Quadratic
function compareAll(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}

printAll([1,2,3,4]);

