var express = require('express');
var partyRouter = express.Router();
var userController = require('../controllers/userController.js');
var eventController = require('../controllers/eventController.js')



//handles request that wants to make a new event by a specific host
partyRouter.route('/event')
  .post(eventController.createEvent);

//handles request that wants all guest on specific event
partyRouter.route('/guestlist')
  .post(eventController.getAllGuests);

//handles request that wants all events on specific user
partyRouter.route('/eventlist')
  .get(eventController.getAllEvents);

//handles request that wants one specific event
partyRouter.route('/addguest')
  .post(eventController.addGuest);

partyRouter.route('/updateEvent')
  .post(eventController.updateEvent);




module.exports = partyRouter;