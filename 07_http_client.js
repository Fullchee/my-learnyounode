var http = require('http');

var url = process.argv[2];

http.get(url, function (res) {
	// res is a Stream obj (emits events: data, error, end)

	// MY SOL
	// res.on('data', function(data) {
	// 	console.log("" + data);  // is data a string? utf8 encoding?
	// })


	// better sol

	res.setEncoding('utf8');  // encodes into strings instead of Buffer objs
	res.on('data', console.log);
	res.on('error', console.error);
}).on('error', console.error);   // documentation: http.get() can get errors