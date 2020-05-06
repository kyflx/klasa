const { Event } = require('klasa');

module.exports = class extends Event {

	run(message, command, response, timer, finalizer, error) {
		this.client.emit('wtf', { prefix: `finalizer (${finalizer.name})`, message: error });
	}

};
