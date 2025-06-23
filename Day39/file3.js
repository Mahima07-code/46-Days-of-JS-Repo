//  Rest with Arrays:
const [first, ...rest] = [1, 2, 3, 4];
console.log(rest); 


//  Rest with Objects:
const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(others); 