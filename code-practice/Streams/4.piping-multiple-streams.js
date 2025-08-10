const fs = require('fs')
const {Transform} = require('stream') 

const readStream = fs.createReadStream('data.txt',{'HighWaterMark': 1})

const writeStream = fs.createWriteStream('timestamped.txt')

const transform = new Transform({
    transform(chunk, encoding, callback) {
        const data = chunk.toString() + `Timestamp: ${new Date().toISOString()}`;
        this.push(data);
        callback();
    }
})

readStream.pipe(transform).pipe(writeStream);