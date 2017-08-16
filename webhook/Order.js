var httpJson = require('./http-json');

var Order = function(parameters) {
	if (!parameters) {
		parameters = {}
	}

	this.products = [];
	this.customer = {};
	this.ccinfo = {};

	this.customer.name = '';
	this.customer.address1 = '';
	this.customer.address2 = '';
	this.customer.city = '';
	this.customer.state = '';
	this.customer.zipcode = '';
	this.customer.country = '';
	this.customer.phone = '';
	this.customer.email = '';
	this.customer.ip = '';

	this.ccinfo.type = '';
	this.ccinfo.ccnum = 1234512345123455;
	this.ccinfo.cvv2 = '';
	this.ccinfo.expmonth = '';
	this.ccinfo.expyear = '';
	this.ordertotal = 134.89;

	if (parameters['customer']) {
		var customer = parameters.customer;

		this.customer.name = customer.name;
		this.customer.address1 = customer.address1;
		this.customer.address2 = customer.address2;
		this.customer.city = customer.city;
		this.customer.state = customer.state;
		this.customer.zipcode = customer.zipcode;
		this.customer.country = customer.country;
		this.customer.phone = customer.phone;
		this.customer.email = customer.email;
		this.customer.ip = customer.ip;

	}

	if (parameters['ccinfo']) {
		var ccinfo = parameters.ccinfo;

		this.ccinfo.type = ccinfo.type;
		this.ccinfo.ccnum = ccinfo.ccnum;
		this.ccinfo.cvv2 = ccinfo.cvv2;
		this.ccinfo.expmonth = ccinfo.expmonth;
		this.ccinfo.expyear = ccinfo.expyear;

	}

}

Order.prototype.addItem = function(Item) { // Add product to Order
	this.products.push(Item);
};

Order.prototype.placeOrder = function(callback) {
	var obj = new Object();

	obj['products'] = JSON.stringify(this.products);
	obj['customer'] = JSON.stringify(this.customer);
	obj['ccinfo'] = JSON.stringify(this.ccinfo);
	obj['ordertotal'] = JSON.stringify(this.ordertotal);

	console.log(JSON.stringify(obj));

	stringified = JSON.stringify(obj);

	httpJson.post(stringified, callback);

};

module.exports = Order;
