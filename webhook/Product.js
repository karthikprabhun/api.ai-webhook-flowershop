/**
 * http://usejsdoc.org/
 */
var Recipient = require('./Recipent.js');
var Product = function(parameters) {
	if (!parameters) {
		parameters = {
			code : '',
			price : '',
			deliverydate : '',
			cardmessage : '',
			specialinstructions : '',
			recipent : ''
		}
	}
		
	
	this.code = parameters.code;
	this.price = parameters.price;
	this.deliverydate = parameters.deliverydate;
	this.cardmessage = parameters.cardmessage;
	this.specialinstructions = parameters.specialinstructions;
	this.recipent = Recipient;
	
	/*this.recipent.name = parameters.name;
	this.recipent.institution = parameters.institution;
	this.recipent.address1 = parameters.address1;
	this.recipent.address2 = parameters.address2;
	this.recipent.city = parameters.city;
	this.recipent.state = parameters.state;
	this.recipent.country = parameters.country;
	this.recipent.phone = parameters.phone;
	this.recipent.zipcode = parameters.zipcode;*/

}

module.exports = Product;