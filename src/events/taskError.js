const { Event } = require('klasa');

module.exports = class extends Event {

	run(scheduledTask, task, error) {
		this.client.emit('wtf', { prefix: `task (${task.name})`, message: error });
	}

};
