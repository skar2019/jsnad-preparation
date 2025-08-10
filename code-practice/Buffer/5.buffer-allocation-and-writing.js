const myBuffer = Buffer.alloc(10);

myBuffer.write('Node.js', 2)

console.log(myBuffer);
console.log(myBuffer.length); // 
console.log(myBuffer.toString()); // 6