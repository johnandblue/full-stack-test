'use strict'

const router = require('koa-router')();
const eventCtrl = require('./controllers/eventCtrl.js');

router.use(router.routes());
router.get('/events', eventCtrl.getEvents);
// router.post('/events', eventCtrl.postEvent);
// router.get('/delete', eventCtrl.deleteEvent);

module.exports = router;
