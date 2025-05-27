// Step 1: Create an ArrayBuffer (the fridge)
const buffer = new ArrayBuffer(8); // 8 bytes = 64 bits

console.log("Buffer byte length:", buffer.byteLength); // 8

// Step 2: Create a Typed Array view (the container inside the fridge)
const intView = new Uint8Array(buffer); // Each element is 1 byte (8 bits)

console.log("Typed array (Uint8Array) initially:", intView); 
// Output: Uint8Array(8) [0, 0, 0, 0, 0, 0, 0, 0]

// Step 3: Fill the Typed Array with data
intView[0] = 255;
intView[1] = 128;
intView[2] = 64;

console.log("Typed array after inserting values:", intView); 
// Output: Uint8Array(8) [255, 128, 64, 0, 0, 0, 0, 0]

// Step 4: Create another view on the same buffer
const anotherView = new Uint16Array(buffer); // Each element is 2 bytes

console.log("Another view (Uint16Array) on the same buffer:", anotherView); 
// Output: Uint16Array(4) [33023, 64, 0, 0]
// Explanation: it reads two bytes at a time
