"use strict";

/**
 Write an HTTP server that receives only POST requests and converts  
  incoming POST body characters to upper-case and returns it to the client.
 */

const http = require('http');
const url = require('url');

let args = process.argv.slice(2)
let port = args[0];

let getTimeObject = function(isoTime) {
    let date = new Date(Date.parse(isoTime));

    return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    }
};


let server = http.createServer(function (req, res) {
    let urlObject = url.parse(req.url, true);
    let pathname = urlObject.pathname;
    let isoTime = urlObject.query.iso;

    let result;

    if (pathname === '/api/parsetime') {
        result = getTimeObject(isoTime);
    }

    if (pathname === '/api/unixtime') {
        result = {
            unixtime: Date.parse(isoTime)
        }
    }
    

    if (result) {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
    }

    else {
        res.writeHead(404);
        res.end();
    }


});

server.listen(port);