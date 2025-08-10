
const buffer1 = Buffer.from("Hello, Node.js!");
const buffer2 = Buffer.from("Hello, World!");

const buffer3 = Buffer.concat([buffer1, buffer2]);

console.log("Concatenated Buffer:", buffer3);

console.log("Concatenated Buffer (Hex):", buffer3.toString("utf8"));
console.log("Concatenated Buffer (Base64):", buffer3.toString("base64"));