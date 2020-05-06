const { Event } = require('klasa');

module.exports = class extends Event {

	run(log) {
		this.client.logger.note(log);
	}

};
