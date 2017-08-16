/**
 * http://usejsdoc.org/
 */
var Product = function(parameters) {
	if (!parameters) {
		parameters = {}
	}
		
	this.code = parameters.code;
	this.price = parameters.price;
	this.deliverydate = parameters.deliverydate;
	this.cardmessage = parameters.cardmessage;
	this.specialinstructions = parameters.specialinstructions;
	this.recipient = {};

}

module.exports = Product;