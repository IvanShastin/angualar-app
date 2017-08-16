'use strict';

var init = require('./config/init')(),
	config = require('./config/config'),
	mongoose = require('mongoose');
var db = mongoose.connect(config.db);
var app = require('./config/express')(db);
require('./config/passport')();
app.listen(config.port);
exports = module.exports = app;
console.log('Application is runnign on ' + config.port);