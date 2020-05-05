const { Event } = require('klasa');

module.exports = class extends Event {

	run(failure) {
		this.client.console.wtf(failure);
	}

};
