var httpJson = require('./http-json');

var Order = function(parameters) {
	if (!parameters) {
		parameters = {}
	}

	// default order
	this.code = '';
	this.price = '';
	this.deliverydate = '';
	this.cardmessage = '';
	this.specialinstructions = '';
	this.recipent = '';
	this.name = '';
	this.address1 = '';
	this.address2 = '';
	this.city = '';
	this.state = '';
	this.zipcode = '';
	this.country = '';
	this.phone = '';
	this.email = '';
	this.ip = '';
	this.type = '';
	this.ccnum = '';
	this.cvv2 = '';
	this.expmonth = '';
	this.expyear = '';
	this.ordertotal = '64.94';

	if (parameters['products']) {
		var product = parameters.products;

		this.code = product.code;
		this.price = product.price;
		this.deliverydate = product.deliverydate;
		this.cardmessage = product.cardmessage;
		this.specialinstructions = product.specialinstructions;
		if (product['recipent']) {
			var recipent = parameters.recipient;

			this.name = recipent.name;
			this.institution = recipent.institution;
			this.address1 = recipent.address1;
			this.address2 = recipent.address2;
			this.city = recipent.city;
			this.state = recipent.state;
			this.country = recipent.country;
			this.phone = recipent.phone;
			this.zipcode = recipent.zipcode;
			return this;
		}
		return this;
	}
	if (parameters['customer']) {
		var customer = parameters.customer;

		this.name = customer.name;
		this.address1 = customer.address1;
		this.address2 = customer.address2;
		this.city = customer.city;
		this.state = customer.state;
		this.zipcode = customer.zipcode;
		this.country = customer.country;
		this.phone = customer.phone;
		this.email = customer.email;
		this.ip = customer.ip;
		return this;
	}
	if (parameters['ccinfo']) {
		var ccinfo = parameters.ccinfo;

		this.type = ccinfo.type;
		this.ccnum = ccinfo.ccnum;
		this.cvv2 = ccinfo.cvv2;
		this.expmonth = ccinfo.expmonth;
		this.expyear = ccinfo.expyear;
		return this;

	}

}



Order.prototype.placeOrder = function(callback) {
	
	var stringified = JSON.stringify({
	    'Order' : this
	  });
	
	 httpJson.post(stringified,callback);
	
};


module.exports = Order;
