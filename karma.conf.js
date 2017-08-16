'use strict';
var applicationConfiguration = require('./config/config');
module.exports = function(config) {
	config.set({
		frameworks: ['jasmine'],
		files: applicationConfiguration.assets.lib.js.concat(applicationConfiguration.assets.js, applicationConfiguration.assets.tests),

		reporters: ['progress'],
		port: 9876,
		colors: true,

		logLevel: config.LOG_INFO,
		autoWatch: true,

		// Options:
		// - Chrome
		// - Firefox
		// - Opera
		// - PhantomJS

		browsers: [ 'PhantomJS'],

		captureTimeout: 60000,
		singleRun: false
	});
};
