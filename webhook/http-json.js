var http = require('request');

var data = JSON.stringify({
	  firstName: 'JoaquÌnssssssssssssssssssssssssssssssssss',
	  cource:"jkndkjsdjsdsdsdsds",
	  name:"kndkndksnkdsndskds"
	  
	});

module.exports.post = function(req, callback) {
    if(typeof req !=  'string')
        req = JSON.stringify(req);

    var options = {
    		uri: 'https://kaprthikprabhu-prod.apigee.net/webhook-flower',
    		method: 'POST',
			headers : {
				"content-type" : "application/json;charset=utf-8",
				"authorization" : "Basic NDE4ODQyOjB0RU5Fdw=="
				
				},
			body: req
    };
  var req = http.post(options, function (error, res, body) {	
    	
      if (error) {
          return callback({
            success: false,
            message: error
          });
      }


      if (res.statusCode !== 200) {
          return callback({
              success: false,
              message: 'HTML Status Code Error ' + res.statusCode
          });
      }

      try {
          var parsed = JSON.parse(body);
          console.log(parsed)
      }
      catch(error){
        console.log(error);
        return callback({
            success: false,
            message: error
        });
      }

      return callback({
          success: true,
          result: parsed
      });
      req.end();
  });
    

}

/*module.exports.get = function(url, callback){
    var requestBody = {
        uri: url,
        headers: {
            'Referer': urls.referer
        }
    };
    http.get(requestBody, function (error, res, body) {
            if (error){  //If request errored out.
                callback({
                    success: false,
                    message: error
                });
                return;
            }
            if (res.statusCode !== 200){  //If request didn't error but response isn't status code 200.
                callback({
                    success: false,
                    message: 'HTML Status Code Error ' + res.statusCode
                });
                return;
            }

            try {
                var parsed = JSON.parse(body);
            }
            catch(error){
              console.log(error);
              return callback({
                  success: false,
                  message: error
              });
            }

            return callback({
                success: true,
                result: parsed
            });
        }
    );
}
*/