/*
## MY FIRST I/O! (Exercise 3 of 13)  
   
  Write a program that uses a single synchronous filesystem operation to  
  read a file and print the number of newlines (\n) it contains to the  
  console (stdout), similar to running cat file | wc -l.
*/

var fs = require('fs');

var file_name = process.argv[2];

// Buffer object: arbitrary array of data
var buffer = fs.readFileSync(file_name);

var file_contents = buffer.toString();

console.log(file_contents.split('\n').length - 1);  // .length has the last line that doesn't have a newline (probably blank)