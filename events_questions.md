## Events

1. **Custom message queue with EventEmitter**
   - Emit `messageReceived` when a message is added and `messageProcessed` when processed.
   - Attach multiple listeners to log details and status.

2. **Timer class extending EventEmitter**
   - Emit `tick` every second and a `stopped` event when stopped.
   - Use `on` for `tick` and `once` for `stopped`.

3. **Keyboard input via process.stdin**
   - Emit `keyPressed` for each input and attach a listener to process/log the data.

4. **Simulated network client**
   - Emit `connect`, `data`, and `error` events.
   - Ensure `error` is handled to avoid crashing the process.

5. **Job queue manager**
   - Emit `jobAdded` and `jobCompleted` events.
   - Use `removeAllListeners` to stop processing after a threshold of completions.

## File System (8%)

1. **List and read .js files**
   - Use `fs.promises.readdir` to list all `.js` files and `fs.promises.readFile` to read them.
   - Handle missing directories and permission errors with clear messages.

2. **Append event logs to a file**
   - Use `fs.promises.appendFile` ensuring creation if missing.
   - Handle `ENOSPC` (disk full) and permission issues.

3. **Watch a configuration file**
   - Use `fs.watch` to monitor changes. Log event type and filename.
   - Handle deletion or inaccessibility during execution.

4. **Create nested directories**
   - Use `fs.promises.mkdir` with `recursive` for structures like `logs/2025/08`.
   - Verify by writing a test file into the directory.

5. **Copy a directory of files**
   - Use `fs.promises.copyFile` to copy all files from a source to destination.
   - Handle missing sources and destination permission issues; log detailed errors.

---

These questions align with JSNAD topics, emphasizing event-driven programming and practical file system operations.


