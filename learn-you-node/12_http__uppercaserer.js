/**
 Write an HTTP server that receives only POST requests and converts  
  incoming POST body characters to upper-case and returns it to the client.
 */

const http = require('http');
const map = require('through2-map');

let args = process.argv.slice(2)
let port = args[0];


let server = http.createServer(function (req, res) {
    if (req.method !== 'POST') {
        return res.end('This server only acts on POST requests.');
    }

    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(res);
});

server.listen(port);