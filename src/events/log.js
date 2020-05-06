const { Event } = require('klasa');

module.exports = class extends Event {

	run(data) {
		this.client.logger.info(data);
	}

};
