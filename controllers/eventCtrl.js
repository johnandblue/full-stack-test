const Event = require('../models/events.js')

const path = require('path');
const eventCtrl = {};

exports.postEvent = function* () {
  Events.postMessage(this.request.body);
  this.status = 201;
};



exports.getEvents = function* () {
  console.log('in eventCtrl.getEvents');
  this.body = yield Events.find();
}


// eventCtrl.deleteEvent = function* () {
//   yield Events.deleteAll();
//   this.status = 202;
// }

module.exports = eventCtrl;
