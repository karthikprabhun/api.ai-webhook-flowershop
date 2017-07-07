var http = require('request');


module.exports.post = function(req, callback) {
    if(typeof req !=  'string')
        req = JSON.stringify(req);
    
console.log("testing here");

    var requestBody = {
    		uri: 'http://kaprthikprabhu-prod.apigee.net/webhook-flower',
			headers : {
				"content-type" : "application/json;charset=utf-8",
				"authorization" : "Basic NDE4ODQyOjB0RU5Fdw==",
				 "Content-Length": "778"
				},
			body: req
    };
    http.post(requestBody, function (error, res, body) {
    	
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