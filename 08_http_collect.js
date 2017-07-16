var http = require('http');
var bl = require('bl');

var url = process.argv[2];

// how to collect all the data?
http.get(url, function(res) {
	res.setEncoding('utf8');  // don't need this
	// once the stream ends (EOF), callback will be fired w/ the data
	res.pipe(bl(function(err, data) {

		if (err) {
			console.error(err);
		}

		// it happens to be the case that the buffer.length === string.length, be careful
		data = data.toString();
		console.log(data.length);
		console.log(data);
	}));
}).on('error', console.error);