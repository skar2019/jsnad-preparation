const fs = require('fs');

var rs = fs.createReadStream('input.txt')

rs.on('data', function(chunk) {
    console.log(chunk.toString());
});