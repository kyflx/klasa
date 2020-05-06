const { Event } = require('klasa');

module.exports = class extends Event {

	run(failure) {
		this.client.logger.fatal(failure);
	}

};
