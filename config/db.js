const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/eventsdb');
const db = mongoose.connection;

module.exports = db;
