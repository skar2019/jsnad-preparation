## Diagnostics and Debugging

1. Synchronous JSON parsing performance
   - Measure parsing time with `console.time` and `console.timeEnd`.
   - Optimize using streams and log the before/after timing difference.

2. Memory leak investigation
   - Accumulate objects in a global array to reproduce a leak.
   - Run with `node --inspect` and use Chrome DevTools heap snapshots to identify it.
   - Fix by limiting memory usage (e.g., clear or cap old entries).

3. Recursive logic debugging
   - Implement a recursive calculation (e.g., factorial) with a logic bug.
   - Debug with `node --inspect-brk` in Chrome DevTools and correct the logic.

4. Deprecated API warning tracing
   - Use a deprecated API (e.g., `fs.exists`) so a warning is emitted.
   - Run with `--trace-warnings` to capture the stack trace.
   - Update to the recommended API (e.g., `fs.access`).

5. Inspecting complex objects
   - Log complex nested objects during processing using `util.inspect`.
   - Choose helpful options to ensure readable, complete output.