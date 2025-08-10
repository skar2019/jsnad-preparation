const myBuffer = Buffer.from("JavaScript");

const slicedBuffer = myBuffer.slice(2, 7);

console.log("Original Buffer:", myBuffer.toString());
console.log("Sliced Buffer:", slicedBuffer.toString());