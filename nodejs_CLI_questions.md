## Node.js CLI

1. **Parse a `--file` argument**
   - Accept `--file` from `process.argv` to select a file to process.
   - Default to a predefined file if not provided.
   - Example: `node script.js --file=data.txt`.

2. **HTTP server with header-size limit**
   - Use `--max-http-header-size=4096` to set a 4KB limit.
   - Also accept a `--port` argument (default `8080`); log configuration on startup.

3. **Heap size restriction**
   - Allocate a large array to risk exceeding limits.
   - Run with `--max-old-space-size=100` to restrict heap to 100MB and handle crashes gracefully.

4. **Preload a logging module**
   - Use `--require` to preload a module and verify by logging initialization before main script runs.

5. **Strict unhandled rejections**
   - Run with `--unhandled-rejections=strict`.
   - Ensure the script catches all rejections properly.


