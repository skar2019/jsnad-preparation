## Error Handling

1. Merge configuration files with async I/O
   - Read two files using `fs.promises.readFile` and merge their contents.
   - Use `try/catch` to handle `ENOENT` (not found) and `EACCES` (permission denied) with specific messages.

2. Validating user input
   - Define a custom `ValidationError` and throw for invalid inputs (e.g., missing email).
   - Catch and show a user-friendly error message.

3. Error-first callback handling
   - Load a JSON file with callback-based `fs.readFile`.
   - Handle `SyntaxError` for invalid JSON and missing file cases; log and provide fallback behavior.

4. Handling unhandled promise rejections
   - Chain promises to fetch/process mock DB data.
   - Use `process.on('unhandledRejection')` to log rejection details including the reason.

5. Express.js error middleware
   - Route queries a database and may throw.
   - Implement centralized error middleware to log and return appropriate HTTP status codes (e.g., 500).