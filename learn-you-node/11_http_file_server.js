/**
 * Write an HTTP server that serves the same text file for each request it  
  receives.
 */

const http = require('http');
const fs = require('fs');

let args = process.argv.slice(2)
let port = args[0];
let fileLocation = args[1];


let server = http.createServer(function (req, res) {
    
    // connect the filesystem stream to the HTTP response stream
    fs.createReadStream(fileLocation).pipe(res);
});

server.listen(port);