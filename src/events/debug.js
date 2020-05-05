const { Event } = require('klasa');

module.exports = class extends Event {

	run(warning) {
		if (this.client.ready) this.client.console.debug(warning);
	}

};
