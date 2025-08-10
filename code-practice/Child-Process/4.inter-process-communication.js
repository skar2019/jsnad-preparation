const {fork} = require('child_process');

const child = fork('new-child.js')

child.send([1, 2, 3, 4, 5]);

child.on('message', (sum_of_array) => {
    console.log('Sum Of Array:', sum_of_array);
})