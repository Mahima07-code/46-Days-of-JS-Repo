const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = Object.assign({}, obj1, obj2);

console.log(merged); 

//⚠️ Warning: It’s a shallow copy – nested objects won’t be deeply cloned 
