var fs = require('fs'),
path = require('path');

var dir_name = process.argv[2];

// does not come prefixed with the '.'
var file_extension = process.argv[3];
file_extension = '.' + file_extension;

fs.readdir(dir_name, function(err, list) {
	if (err) throw err;

	// for in isn't like python, it's just syntactic sugar where entry is like i
	// for (var entry in list) {
	// 	if (path.extname(list[entry]) === file_extension) {
	// 		console.log(list[entry]);
	// 	}
	// }

	// for a better for loop like Java and Python
	list.forEach(function(file) {
		if (path.extname(list[entry]) === file_extension) {
			console.log(list[entry]);
		}
	})
});