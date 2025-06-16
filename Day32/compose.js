// 📌 3. Compose

const add5 = x => x + 5;
const double = x => x * 2;

const compose = (f, g) => x => f(g(x));

const result = compose(add5, double); // double first, then add5
console.log(result(10)); // (10*2) + 5 = 25
