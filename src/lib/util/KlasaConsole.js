const { Console } = require('console');
const constants = require('./constants');
const { mergeDefault } = require('./util');
const Logger = require('@ayanaware/logger');

/**
 * Klasa's console class, extends NodeJS Console class.
 */
class KlasaConsole extends Console {

	constructor(options = {}) {
		options = mergeDefault(constants.DEFAULTS.CONSOLE, options);
		super(options.stdout, options.stderr);

		this.logger = Logger.custom('Klasa', 'klasa', 'console.');
	}

	/**
	 * The timestamp to use
	 * @type {string}
	 * @private
	 */
	get timestamp() {
		return this.utc ? this.template.displayUTC() : this.template.display();
	}

	/**
	 * Calls a log write with everything to the console/writable stream.
	 * @since 0.4.0
	 * @param {string} log The data we want to print
	 * @param {string} uniqueIdentifier The log identifier
	 * @param {Object} extra Extra data
	 * @returns {void}
	 */
	log(log, uniqueIdentifier, extra) {
		this.logger.info(log, uniqueIdentifier, extra);
	}

	/**
	 * Calls a warn write with everything to the console/writable stream.
	 * @since 0.4.0
	 * @param {string} log The data we want to print
	 * @param {string} uniqueIdentifier The log identifier
	 * @param {Object} extra Extra data
	 * @returns {void}
	 */
	warn(log, uniqueIdentifier, extra) {
		this.logger.warn(log, uniqueIdentifier, extra);
	}

	/**
	 * Calls an error write with everything to the console/writable stream.
	 * @since 0.4.0
	 * @param {string} log The data we want to print
	 * @param {string} uniqueIdentifier The log identifier
	 * @param {Object} extra Extra data
	 * @returns {void}
	 */
	error(log, uniqueIdentifier, extra) {
		this.logger.error(log, uniqueIdentifier, extra);
	}

	/**
	 * Calls a debug write with everything to the console/writable stream.
	 * @since 0.4.0
	 * @param {string} log The data we want to print
	 * @param {string} uniqueIdentifier The log identifier
	 * @param {Object} extra Extra data
	 * @returns {void}
	 */
	debug(log, uniqueIdentifier, extra) {
		this.logger.debug(log, uniqueIdentifier, extra);
	}

	/**
	 * Calls a verbose write with everything to the console/writable stream.
	 * @since 0.4.0
	 * @param {string} log The data we want to print
	 * @param {string} uniqueIdentifier The log identifier
	 * @param {Object} extra Extra data
	 * @returns {void}
	 */
	verbose(log, uniqueIdentifier, extra) {
		this.logger.trace(log, uniqueIdentifier, extra);
	}

	/**
	 * Calls a wtf (what a terrible failure) write with everything to the console/writable stream.
	 * @since 0.4.0
	 * @param {string} log The data we want to print
	 * @param {string} uniqueIdentifier The log identifier
	 * @param {Object} extra Extra data
	 * @returns {void}
	 */
	wtf(log, uniqueIdentifier, extra) {
		this.logger.error(log, uniqueIdentifier, extra);
	}

}

module.exports = KlasaConsole;
