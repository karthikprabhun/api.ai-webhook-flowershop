/**
 * http://usejsdoc.org/
 */
var Customer = require('./Customer.js');
var Ccinfo = require('./Ccinfo.js');
var Prod = require('./Product.js');
var Recipent = require('./Recipent.js');
var Order = require('./Order.js');

var cust =  new Customer();
var ccinfo = new Ccinfo();
var prod = new Prod();
var recipent = new Recipent();




cust.address1 ="123 Big Street";
cust.address2 ="";
cust.city ="Wilmington";
cust.country = "US";
cust.email = "phil@floristone.com";
cust.ip = "1.1.1.1";
cust.name = "John Doe";
cust.state ="DE";
cust.zipcode ="19801";
cust.phone ="123-123-1234";
			
prod.cardmessage="This is a card message";
prod.deliverydate="2017-07-28";
prod.specialinstructions ="Special delivery instructions";
prod.code="F1-509";
prod.price="39.95";
prod.recipient = recipent;

recipent.address1 ="123 Big St";
recipent.address2 ="";
recipent.name="Phil";
recipent.city="Wilmington";
recipent.state="DE";
recipent.country="US";
recipent.institution ="House";
recipent.zipcode="19801";
recipent.phone='1234567890';

ccinfo.ccnum='1234512345123455';
ccinfo.cvv2='123';
ccinfo.expmonth='3';
ccinfo.expyear='19';
ccinfo.type='vi';

var order = new Order({customer:cust,product:prod,ccinfo:ccinfo});
order.placeOrder(
		function(result) {
    console.log(result)
});




