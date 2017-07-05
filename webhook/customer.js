var express = require('express');
var http = require('https');
//var bodyParser = require('body-parser');

//var data = require('./data.json');
//var body = JSON.stringify(data);

var app = express();
//app.use(bodyParser.json());


app
		.post(
				'/placeOrder',
				function(request, response) {
					var options = {
						"method" : "POST",
						"hostname" : "kaprthikprabhu-prod.apigee.net",
						"port" : null,
						"path" : "/webhook-flower",
						"headers" : {
							"content-type" : "application/json;charset=utf-8",
							"authorization" : "Basic NDE4ODQyOjB0RU5Fdw==",
							"cache-control" : "no-cache",
						}
					};

					var req = http.request(options, function(res) {
						var chunks = [];

						res.on("data", function(chunk) {
							chunks.push(chunk);
						});

						res.on("end", function() {
							var body = Buffer.concat(chunks);
							console.log(body.toString());
							
						});
						
					});

					req
							.write(JSON
									.stringify({
										products : '[{"code":"F1-509","price":39.95,"deliverydate":"2017-07-5","cardmessage":"This is a card message","specialinstructions":"Special delivery instructions go here","recipient":{"name":"Phil","institution":"House","address1":"123 Big St","address2":"","city":"Wilmington","state":"DE","country":"US","phone":"1234567890","zipcode":"19801"}}]',
										customer : '{"name":"John Doe","address1":"123 Big Street","address2":"   ","city":"Wilmington","state":"DE","zipcode":"19801","country":"US","phone":"123-123-1234","email":"phil@floristone.com","ip":"1.1.1.1"}',
										ccinfo : '{"type":"vi","ccnum":1234512345123455,"cvv2":123,"expmonth":3,"expyear":19}',
										ordertotal : 64.94
									}));
					req.end();
					
				});

app.listen((process.env.PORT || 9000), function() {
	console.log("server Listening");
});
