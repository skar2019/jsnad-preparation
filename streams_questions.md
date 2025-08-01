Streams Questions

Readable Stream from FileWrite a Node.js script that creates a readable stream from a text file named "input.txt" and pipes its content to the console. Handle any errors that occur during the process.

Writable Stream to FileCreate a writable stream to a file named "output.txt". Write the string "Hello, Streams!" to it 5 times, each on a new line, and close the stream properly.

Transform Stream for Uppercase ConversionImplement a Transform stream that converts all incoming text to uppercase. Pipe a readable stream from "input.txt" through this transform stream and into a writable stream to "output.txt".

Piping Multiple StreamsWrite a script that reads from a file "data.txt" using a readable stream, pipes it through a transform stream that prepends each chunk with a timestamp, and writes the result to "timestamped.txt".

Handling BackpressureCreate a readable stream that generates numbers from 1 to 1000 and a writable stream that logs each number to the console. Implement proper backpressure handling to prevent overwhelming the writable stream.

