var httpJson = require('./http-json');

var Order = function(parameters) {
	if (!parameters) {
		parameters = {}
	}

	prod = {};
	this.products = [];
	this.customer = {};
	this.ccinfo = {};
	this.ordertotal = '64.94';

	/*
	 * // default order this.code = ''; this.price = ''; this.deliverydate = '';
	 * this.cardmessage = ''; this.specialinstructions = '';
	 * 
	 * this.name = ''; this.institution = ''; this.address1 = ''; this.address2 =
	 * ''; this.city = ''; this.state = ''; this.country = ''; this.phone = '';
	 * this.zipcode = '';
	 */

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
	this.ccinfo.ccnum = '1234512345123455';
	this.ccinfo.cvv2 = '';
	this.ccinfo.expmonth = '';
	this.ccinfo.expyear = '';

	if (parameters['products']) {
		product = parameters.products;

		prod.code = product.code;
		prod.price = product.price;
		prod.deliverydate = product.deliverydate;
		prod.cardmessage = product.cardmessage;
		prod.specialinstructions = product.specialinstructions;
		prod.recipent = product.recipent

		if (product['recipent']) {
			var recipent = product.recipent;

			name = recipent.name;
			institution = recipent.institution;
			address1 = recipent.address1;
			address2 = recipent.address2;
			city = recipent.city;
			state = recipent.state;
			country = recipent.country;
			phone = recipent.phone;
			zipcode = recipent.zipcode;

		}

	}

	this.products.push(prod);

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
		return this;

	}

}

Order.prototype.placeOrder = function(callback) {

	var stringified = JSON.stringify(this);
	console.log(stringified);
	httpJson.post(stringified, callback);

};

module.exports = Order;
