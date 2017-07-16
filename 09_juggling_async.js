// counting callbacks
// should use a library like async or after

// modularize the code a bit more
var http = require('http');
var bl = require('bl');  // buffer list


var urls = process.argv.slice(2);   // array of all the args from 2 onwards
// for (var i = 0; i < 3; i++) {
// 	urls.push(process.argv[i + 2]);
// }

var results = [];
var resultsCount = 0;

function printResults(results) {
	results.forEach(function(result) {
		console.log(result);
	});
}

// forEach can have up to three args: (value, index, array)
urls.forEach(function (url, i) {
	http.get(url, function(res) {
		res.setEncoding('utf8');  // TODO for some reason this doesn't do a/th
		res.pipe(bl(function(err, data) {
			if (err) {
				console.error(err);
			}


			// store the results in a global var, bad style
			results[i] = data.toString();
			resultsCount++;

			// this is why callback hell happens: callback calls more & more callbacks
			// this will only be run by the last url
			if (resultsCount === urls.length) {
				printResults(results);
			}
		}));
	}).on('error', console.error);
});