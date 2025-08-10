const { fork } = require('child_process');

const child = fork('child.js');

child.on('message', (message) => {
  console.log(`Received from child: ${message}`);
});

child.on('error', (err) => {
  console.error(`Child process error: ${err}`);
});

child.on('exit', (code) => {
  console.log(`Child process exited with code ${code}`);
});