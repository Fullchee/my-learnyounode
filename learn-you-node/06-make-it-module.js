var fs = require('fs'),
    path = require('path');

module.exports = function (dir, ext, callback) {
    ext = '.' + ext;

    fs.readdir(dir, function (err, data) {
        if (err) return callback(err);

        // CSC324 filters and only keeps the ones that matter
        data = data.filter(function (file) {
            return path.extname(file) === ext;
        });

        // the caller's callback can do anything with this 
        // in the other file for this program, it just console.logs everything

        // it could have done other fancy stuff
        // dependency injection
        callback(null, data);
    });
};