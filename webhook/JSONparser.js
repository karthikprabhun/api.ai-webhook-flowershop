var parseJson = require('body-parser');
var data = require('./data.json');

var fs = require('fs');
var jsonData = '';

fs.readFile(__dirname + '/data.json', 'utf8', function(err, data) {

	if (err)
		throw err;

	jsonData = JSON.parse(data);

});

console.log(jsonData.result.action);