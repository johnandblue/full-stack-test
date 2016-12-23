
const mongodb = require('../config/db.js');
const mongoose = require('mongoose');

const EventsSchema = mongoose.Schema({
  title: String,
  date: Date,
  venue: String
});

const Events = mongoose.model('Events', EventsSchema);


// Events.getAll = function* () {
//   return {
//     console.log('in events getAll', this.body);
//     Events.find();
//   }
// };

// Events.postMessage = function (event) {
//   Events.create(event, function (err, event) {
//     if (err) handleError(err);
//     console.log('event', event);
//   });
// };

// Message.deleteAll = function* () {
//   mongodb.db.listCollections({name: 'messages'})
//     .next(function (err, collinfo) {
//         if (collinfo) {
//             // The collection exists
//             mongodb.db.dropCollection('messages');
//         }
//     });
// }


module.exports = Events;
