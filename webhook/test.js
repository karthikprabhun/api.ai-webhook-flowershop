/**
 * http://usejsdoc.org/
 */
var Customer = require('./Customer.js');
var Ccinfo = require('./Ccinfo.js');
var Prod = require('./Product.js');
//var Recipient = require('./Recipent.js');
var Order = require('./Order.js');

var data = require('./data.json');



var cust = new Customer();
var prod = new Prod();
//var recipient = new Recipient();
var ccinfo = new Ccinfo();

cust.address1 = "123 Big Street";
cust.address2 = "";
cust.city = "Wilmington";
cust.country = "US";
cust.email = "phil@floristone.com";
cust.ip = "1.1.1.1";
cust.name = "John Doe";
cust.state = "DE";
cust.zipcode = "19801";
cust.phone = "123-123-1234";

prod.cardmessage = "This is a card message";
prod.deliverydate = "2017-08-19";
prod.specialinstructions = "Special delivery instructions go here";

prod.code = "B23-4386";
prod.price = 69.95;
/*prod.recipient = recipient;*/


prod.recipent.address1 = "123 Big St";
prod.recipent.address2 = "";
prod.recipent.name = "phil";
prod.recipent.city = "Wilmington";
prod.recipent.state = "DE";
prod.recipent.country = "US";
prod.recipent.institution = "House";
prod.recipent.zipcode = "19805";
prod.recipent.phone = '1234567890';

ccinfo.ccnum = 1234512345123455;
ccinfo.cvv2 = 123;
ccinfo.expmonth = 3;
ccinfo.expyear = 19;
ccinfo.type = 'vi';

// var order = new Order({'customer':cust,'products':prod,'ccinfo':ccinfo});

console.log(prod)


var order = new Order({
	
	customer : cust,
	ccinfo : ccinfo
});
// console.log(JSON.stringify(ccinfo))
order.addItem({prod});

order.placeOrder(function(result) {
	console.log(result)
});
