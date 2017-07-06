var express = require('express');
var http = require('https');
var bodyParser = require('body-parser');

//var data = require('./data.json');
//var body = JSON.stringify(data);

var app = express();
app.use(bodyParser.json());
 

app
		.post(
				'/placeOrder',
				function(request, response) {
					var options = {
						"method" : "POST",
						"hostname" : "www.floristone.com",
						"port" : null,
						"path" : "/api/rest/flowershop/placeorder",
						"headers" : {
							"content-type" : "application/json;charset=utf-8",
							"authorization" : "Basic NDE4ODQyOjB0RU5Fdw==",
							 "Content-Length": "778"
								 
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
							//response.writeHead(200,{"content-type" : "application/json"});
							//response.setHeader("Content-Type", "text/json");
							
							 
							 
							response.send({speech: 'speech',
							        displayText: 'speech',
							        source: 'webhook-echo-sample'} );
						});
						
						res.on("error", function() {
							
						})
						
					});

					req
							.write(JSON
									.stringify({
										products : '[{"code":"F1-509","price":39.95,"deliverydate":"2017-07-28","cardmessage":"This is a card message","specialinstructions":"Special delivery instructions go here","recipient":{"name":"Phil","institution":"House","address1":"123 Big St","address2":"","city":"Wilmington","state":"DE","country":"US","phone":"1234567890","zipcode":"19801"}}]',
										customer : '{"name":"John Doe","address1":"123 Big Street","address2":"   ","city":"Wilmington","state":"DE","zipcode":"19801","country":"US","phone":"123-123-1234","email":"phil@floristone.com","ip":"1.1.1.1"}',
										ccinfo : '{"type":"vi","ccnum":1234512345123455,"cvv2":123,"expmonth":3,"expyear":19}',
										ordertotal : 64.94
									}));
					req.end();

				});

app.listen((process.env.PORT || 8883), function() {
	console.log("server Listening");
});