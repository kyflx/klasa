const { Event } = require('klasa');

module.exports = class extends Event {

	run(data) {
		this.client.console.log(data);
	}

};
