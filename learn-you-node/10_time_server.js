const net = require('net');  // not HTTP server, lower level net
let moment = require('moment');

let args = process.argv.slice(2)
let port = args[0];



/** Time formatted time "YYYY-MM-DD hh:mm" */
function getTime() {
	return moment().format("YYYY-MM-DD HH:MM");
}


let connectionListener = function (socket) {
	socket.write(getTime() + '\n');   // instructions say to add a new line

	socket.end()
}

let server = net.createServer(connectionListener);

server.listen(port);

// net.createServer(listener});
// vs
// net.createServer(function(socket) { /* ... */});