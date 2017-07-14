var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.post('/placeOrder', function(request, response) {

	callToBackend(request, response, function(err, data) {

		if (!err)
			response.send(data);
		else {

			response.status(500).send("Server Error");
			return;
		}
	});

});

var callToBackend = function(mainreq, mainres, callback) {
	var jsonDataObj = {
		products : '[{"code":"F1-509","price":39.95,"deliverydate":"2017-07-28","cardmessage":"This is a card message","specialinstructions":"Special delivery instructions go here","recipient":{"name":"Phil","institution":"House","address1":"123 Big St","address2":"","city":"Wilmington","state":"DE","country":"US","phone":"1234567890","zipcode":"19801"}}]',
		customer : '{"name":"John Doe","address1":"123 Big Street","address2":"   ","city":"Wilmington","state":"DE","zipcode":"19801","country":"US","phone":"123-123-1234","email":"phil@floristone.com","ip":"1.1.1.1"}',
		ccinfo : '{"type":"vi","ccnum":1234512345123455,"cvv2":123,"expmonth":3,"expyear":19}',
		ordertotal : 64.94
	};
	console.log(jsonDataObj)

	var options = {

		url : "https://www.floristone.com/api/rest/flowershop/placeorder",
		body : jsonDataObj,
		json : true,
		"headers" : {
			"content-type" : "application/json;charset=utf-8",
			"authorization" : "Basic NDE4ODQyOjB0RU5Fdw==",
			"Content-Length" : "778"
		}

	};

	var req = request.post(options, function(err, res, body) {

		if (!err && res.statusCode == '200')
			return callback(false, body);

		return callback(err, null);

	});

}

app.listen((process.env.PORT || 8883), function() {
	console.log("server Listening");
});