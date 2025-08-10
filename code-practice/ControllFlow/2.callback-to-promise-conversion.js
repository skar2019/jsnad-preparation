const fs = require('fs');
const util = require('util');

// Convert fs.readFile to a Promise-based function
const readFilePromise = util.promisify(fs.readFile);

async function readDataFile() {
  try {
    // Read the file using the promisified function
    const data = await readFilePromise('data.txt', 'utf8');
    console.log("File contents:", data);
  } catch (error) {
    console.error("Error reading file:", error);
    throw error;
  }
}

// Execute the function
readDataFile();