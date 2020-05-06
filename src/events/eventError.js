const { Event } = require('klasa');

module.exports = class extends Event {

	run(event, args, error) {
		this.client.emit('wtf', { prefix: `event (${event.name})`, message: error });
	}

};
