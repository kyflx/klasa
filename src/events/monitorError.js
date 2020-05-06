const { Event } = require('klasa');

module.exports = class extends Event {

	run(message, monitor, error) {
		this.client.emit('wtf', { prefix: `monitor (${monitor.name})`, message: error });
	}

};
