var fs = require('fs');

module.exports = readFile;

function readFile(filename) {
    return fs.readFileSync(filename).toString();
}