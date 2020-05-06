const constants = require('./constants');
const { mergeDefault } = require('./util');
const signale = require('signale');

/**
 * Klasa's console class, extends NodeJS Console class.
 */
class KlasaConsole {

	constructor(options = {}) {
		options = mergeDefault(constants.DEFAULTS.CONSOLE, options);
		signale.config(options);
		this.logger = signale;
	}

	/**
	 * Calls a log write with everything to the console/writable stream.
	 * @since 0.4.0
	 * @param {...*} data Shit to log to the console.
	 * @returns {void}
	 */
	log(...data) {
		this.logger.info(...data);
	}

	/**
	 * Calls a warn write with everything to the console/writable stream.
	 * @since 0.4.0
	 * @param {...*} data Shit to log to the console.
	 * @returns {void}
	 */
	warn(...data) {
		this.logger.warn(...data);
	}

	/**
	 * Calls an error write with everything to the console/writable stream.
	 * @since 0.4.0
	 * @param {...*} data Shit to log to the console.
	 * @returns {void}
	 */
	error(...data) {
		this.logger.error(...data);
	}

	/**
	 * Calls a debug write with everything to the console/writable stream.
	 * @since 0.4.0
	 * @param {...*} data Shit to log to the console.
	 * @returns {void}
	 */
	debug(...data) {
		this.logger.debug(...data);
	}

	/**
	 * Calls a verbose write with everything to the console/writable stream.
	 * @since 0.4.0
	 * @param {...*} data Shit to log to the console.
	 * @returns {void}
	 */
	verbose(...data) {
		this.logger.note(...data);
	}

	/**
	 * Calls a wtf (what a terrible failure) write with everything to the console/writable stream.
	 * @since 0.4.0
	 * @param {string} log The data we want to print
	 * @param {string} uniqueIdentifier The log identifier
	 * @param {Object} extra Extra data
	 * @returns {void}
	 */
	wtf(...data) {
		this.logger.error(...data);
	}

}

module.exports = KlasaConsole;
