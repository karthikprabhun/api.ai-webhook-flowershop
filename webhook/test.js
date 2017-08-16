/**
 * http://usejsdoc.org/
 */
var Customer = require('./Customer.js');
var Ccinfo = require('./Ccinfo.js');
var product = require('./product.js');
var Order = require('./Order.js');

var data = require('./data.json');

var cust = new Customer();

var ccinfo = new Ccinfo();

cust.name = "Robert";
cust.address1 = "Smith james";
cust.address2 = "";
cust.city = "Austin";
cust.state = "VA";
cust.zipcode = "12547";
cust.country = "US";
cust.phone = "987456321";
cust.email = "efdfdfdhfkhdfk@hjsd.com";
cust.ip = "1.1.1.1";

ccinfo.type = 'vi';
ccinfo.ccnum = 1234512345123455;
ccinfo.cvv2 = 123;
ccinfo.expmonth = 3;
ccinfo.expyear = 19;

var order = new Order({
	customer : cust,
	ccinfo : ccinfo
});

var total_item = ['T22-3A','T22-3A'];

var product = new product();

for (var i = 0; i < total_item.length; i++) {
	
	product.cardmessage = "This is a card message";
	product.deliverydate = "2017-08-19";
	product.specialinstructions = "Special delivery instructions go here";
	product.code = "T22-3A";
	product.price = 59.95;

	product.recipient.name = "phil";
	product.recipient.institution = "House";
	product.recipient.address1 = "123 Big St";
	product.recipient.address2 = "";
	product.recipient.city = "Wilmington";
	product.recipient.state = "DE";
	product.recipient.country = "US";
	product.recipient.phone = '1234567890';
	product.recipient.zipcode = "19805";

	order.addItem(product);
}


/*product.cardmessage = "This is a card message";
product.deliverydate = "2017-08-19";
product.specialinstructions = "Special delivery instructions go here";
product.code = "T22-3A";
product.price = 59.95;

product.recipient.name = "phil";
product.recipient.institution = "House";
product.recipient.address1 = "123 Big St";
product.recipient.address2 = "";
product.recipient.city = "Wilmington";
product.recipient.state = "DE";
product.recipient.country = "US";
product.recipient.phone = '1234567890';
product.recipient.zipcode = "19805";*/




// console.log(JSON.stringify(ccinfo))

/* order.addItem(product); */
order.placeOrder(function(result) {
	console.log(result)
});
