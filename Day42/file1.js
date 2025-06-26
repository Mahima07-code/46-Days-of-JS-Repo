function memoizedFibonacci() {
  const cache = {};

  return function fib(n) {
    if (n in cache) {
      console.log("Fetching from cache:", n);
      return cache[n];
    }
    if (n <= 1) {
      cache[n] = n;
    } else {
      cache[n] = fib(n - 1) + fib(n - 2);
    }
    return cache[n];
  };
}

const fibonacci = memoizedFibonacci();
console.log(fibonacci(10)); // Output: 55, but way faster!
