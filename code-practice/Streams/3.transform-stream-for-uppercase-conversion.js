const fs = require('fs');
const {Transform} = require('stream')

const readStream = fs.createReadStream('input.txt')

const writeStream = fs.createWriteStream('upper-case.txt');


const transform = new Transform({
  transform(chunk, encoding, callback) {
    var upperceCase = chunk.toString().toUpperCase();
    this.push(upperceCase);
    callback()
  },
});

readStream.pipe(transform).pipe(writeStream);


readStream.on('error', (err) => {
    console.error('Error reading file:', err);
});

readStream.on('end', () => {
    console.log('Reading completed');
});

writeStream.on('finish', () => {
    console.log('File has been written');
});

writeStream.on('error', (err) => {
    console.error('Error writing file:', err);
});

writeStream.on('close', () => {
    console.log('Writing completed');
});





