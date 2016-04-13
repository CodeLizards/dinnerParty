var Sequelize = require('sequelize');
var db = require('../config/init.js');


//make a new event by a specific host
exports.createEvent = function(req, res, next){
  db.Event.create({name: req.body.eventName, location: req.body.location, description: req.body.description, date: req.body.date, cost: req.body.cost })
    .then(function(event){
      if(req.body.invitelist){
        for(var i = 0; i < req.body.invitelist.length; i++){
          db.User.findOne({name: req.body.invitelist[i]})
            .then(function(guest){
              event.addUser(guest).then(function(guest){
                console.log('GUEST',guest);
                next();
              });
          });
        }
      }
      res.send(event);
    });

};

exports.updateEvent = function(req, res, next){

};


//get events for users dashboard
exports.getAllEvents = function(req, res){

  // console.log('you hit events')

  // var PartyDetailsData = [
  //  {eventName: 'yo mama',
  //   location: 'your house',
  //   time: '9am',
  //   cost: '$5',
  //   description: 'so much fun so much fun so much fun so much'
  // },

  // {eventName: 'hi',
  //  location: 'my house',
  //  time: '7am',
  //  cost: '$10',
  //  description: 'so much fun so much fun so much fun so much fun so much fun so much'
  // },

  // {eventName: 'greatThingsHappening',
  // location: 'the park',
  // time: '7pm',
  // cost: '$3',
  // description: 'so much fun so much fun so much fun so much fun so much fun'
  // }
  // ];

  // res.send(PartyDetailsData);
  console.log('reqqq', req.user);
  db.User.findOne({googleId: req.user.googleId})
    .then(function(user){
      user.getEvents().then(function(events){
        var eventAttributes=[];
        for(var i = 0; events.length > i; i++){
          // if(events[i].UserEvent.status === 'invited'){
            eventAttributes.push([events[i].id,events[i].UserEvent.status]);
           // }
        }
        console.log(events);
        res.json(events);
      });
    });
};

//get one event
exports.getOneEvent = function(req, res){
  // var user = req.user;

  // db.User.findOne({id: req.user.id})
  //   .then(function(user){
  //     // user.getEvents().
  // });
};



exports.getAllGuests = function(req, res){

//   console.log('get guest list')
//   var GuestListData = [
//    {name: 'santaClause'},
//    {name: 'jane'},
//    {name: 'Lizzy'}
//   ];

// res.send(GuestListData);
// get all guests for specific event
  db.Event.findOne({name: req.body.event})
    .then(function(event){
      event.getUsers().then(function(users){
        var userAttributes=[];
        for(var i = 0; users.length > i; i++) {
          if(users[i].UserEvent.status === 'pending'){
            userAttributes.push(users[i].id);
          }
          //do something with userAttributes
          console.log(users);
          res.json(users);
        }
      });
    });



};



var addGuest = function(req, res, next){
 // console.log('HELPER NEXT', event);  
 // console.log(event);
 db.User.findOne({name: req.body.guest}).then(function(guest){
   db.Event.findOne({name: req.body.event})
   .then(function(event){
     console.log('EVENT', event);
     event.addUser(guest);
     next();
   });
 });
};