// 📌 4. Pipe

const add5 = x => x + 5;
const double = x => x * 2;

const pipe = (f, g) => x => g(f(x));

const resultPipe = pipe(add5, double); // add5 first, then double
console.log(resultPipe(10)); // (10+5) * 2 = 3