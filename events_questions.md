# Events Questions

## 1. Custom message queue with EventEmitter
Write a Node.js script that creates a custom `EventEmitter` to simulate a message queue, emitting `messageReceived` when a message is added and `messageProcessed` when processed, with multiple listeners logging message details and status.

## 2. Timer class extending EventEmitter
Create a Node.js class that extends `EventEmitter` to model a timer, emitting `tick` events every second and a `stopped` event when the timer is stopped, using `on` for `tick` and `once` for `stopped`.

## 3. Keyboard input via process.stdin
Develop a Node.js script that uses an `EventEmitter` to handle keyboard input from `process.stdin`, emitting a `keyPressed` event for each input and attaching a listener to process and log the data.

## 4. Simulated network client
Write a Node.js script that simulates a network client using an `EventEmitter`, emitting `connect`, `data`, and `error` events and handling `error` to log issues without crashing the process.

## 5. Job queue manager
Create a Node.js script with an `EventEmitter` that manages a job queue, emitting `jobAdded` and `jobCompleted` events and using `removeAllListeners` to stop processing jobs after a specified number of completions.

## 6. File system: List and read .js files
Write a Node.js script that uses `fs.promises.readdir` to list all `.js` files in a directory and `fs.promises.readFile` to read their contents, handling missing directories and permission errors with clear messages.

## 7. File system: Append event logs to a file
Create a Node.js function that logs events to a file using `fs.promises.appendFile`, ensuring the file is created if it doesn’t exist and handling `ENOSPC` (disk full) or permission issues.

## 8. File system: Watch a configuration file
Develop a Node.js script that uses `fs.watch` to monitor a configuration file for changes, logging the event type and filename and handling errors if the file is deleted or becomes inaccessible during execution.

## 9. File system: Create nested directories
Write a Node.js script that creates a nested directory structure (e.g., `logs/2025/08`) using `fs.promises.mkdir` with the `recursive` option and verify creation by writing a test file into the directory.

## 10. File system: Copy a directory of files
Create a Node.js script that copies all files from one directory to another using `fs.promises.copyFile`, handling missing sources and destination permission issues and logging detailed error messages.


