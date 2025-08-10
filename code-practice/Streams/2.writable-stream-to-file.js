const fs = require('fs');

const ws = fs.createWriteStream('output.txt');
for (let i = 0; i < 5; i++) {
    ws.write('Hello, World! \n');
}
ws.end();