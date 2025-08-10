//1. Create and Manipulate a Buffer
//Write a Node.js function that creates a Buffer from the string "Hello, Node.js!" and converts it to both a hexadecimal string and a base64 string. Print both results to the console.

function createAndManipulateBuffer() {
    const buffer = Buffer.from("Hello, Node.js!");
    const hexString = buffer.toString("hex");
    const base64String = buffer.toString("base64");

    console.log("Hexadecimal String:", hexString);
    console.log("Base64 String:", base64String);
}

createAndManipulateBuffer();