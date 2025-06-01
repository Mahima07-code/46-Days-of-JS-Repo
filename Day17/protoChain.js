const grandParent = { hasHouse: true };
const parent = Object.create(grandParent);
const child = Object.create(parent);

console.log(child.hasHouse); 

// child → parent → grandParent → null