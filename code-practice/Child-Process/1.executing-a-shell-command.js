const {exec} = require('child_process');

console.log(process.platform);

const platform = process.platform

if (platform === 'win32') { 
    command = 'dir';
} else {
    command = 'ls -la';
}
    

child_process.exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error('Error:', error);
    }
    if (stderr) {
        console.error('Error:', stderr);
    }
    console.log('stdout:', stdout);    
})
    