// 📌 2. Currying

function curryMultiply(a) {
  return function(b) {
    return function(c) {
      return a * b * c;
    };
  };
}

console.log(curryMultiply(2)(3)(4)); // 24
