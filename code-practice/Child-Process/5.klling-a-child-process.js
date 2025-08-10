const {spawn} = require('child_process');

const child = spawn('node', ['childLoop.js'])

child.stdout.on('data', (data) => {
    console.log(`Child process output: ${data}`);
});

setTimeout(() => {
    child.kill();
    console.log('Child process terminated');
}, 5000)