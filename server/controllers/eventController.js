var Sequelize = require('sequelize');
var db = require('../config/init.js');


//make a new event by a specific host
exports.createEvent = function(req, res){

  db.Event.create(req.body).then(function(event){
      res.send(event);
    });

};



//get events for users dashboard
exports.getAllEvents = function(req, res){
  console.log('you hit events')

  var PartyDetailsData = [
   {eventName: 'yo mama',
    location: 'your house',
    time: '9am',
    cost: '$5',
    description: 'so much fun so much fun so much fun so much'
  },

  {eventName: 'hi',
   location: 'my house',
   time: '7am',
   cost: '$10',
   description: 'so much fun so much fun so much fun so much fun so much fun so much'
  },

  {eventName: 'greatThingsHappening',
  location: 'the park',
  time: '7pm',
  cost: '$3',
  description: 'so much fun so much fun so much fun so much fun so much fun'
  }
  ];

  res.send(PartyDetailsData);




  db.User.findOne(req.body)
    .then(function(user){
      user.getEvents().then(function(events){
        var eventAttributes=[];
        for(var i = 0; events.length > i; i++){
          // if(events[i].UserEvent.status === 'invited'){
            eventAttributes.push([events[i].id,events[i].UserEvent.status]);
          // }

        }
      });
    });
};

//get one event
exports.getOneEvent = function(req, res){
  var user = req.user;

  db.User.findOne({id: req.user.id})
    .then(function(user){
      user.getEvents().
    });
};



exports.getAllGuests = function(req, res){
  console.log('get guest list')
  var GuestListData = [
   {name: 'santaClause'},
   {name: 'jane'},
   {name: 'Lizzie'}
  ];

res.send(GuestListData);
// get all guests for specific event
  db.Event.findOne(req.body.event)
    .then(function(event){
      event.getUsers().then(function(users){
        var userAttributes=[];
        for(var i = 0; users.length > i; i++) {
          if(users[i].UserEvent.status === 'invited'){
            userAttributes.push(users[i].id);
          }
          //do something with userAttributes
          console.log(users);
        }
      });
    });


};


var addGuest = function(req, res, next){
 // console.log('HELPER NEXT', event);  
 // console.log(event);
 // db.User.findOne({name: req.body.guest}).then(function(guest){
 //   db.Event.findOne({name: req.body.event})
 //   .then(function(event){
 //     console.log('EVENT', event);
 //     event.addUser(guest);
 //     next();
 //   });
 // });
};


var addGuest = function(req, res, next){
 // console.log('HELPER NEXT', event);  
 // console.log(event);
 // db.User.findOne({name: req.body.guest}).then(function(guest){
 //   db.Event.findOne({name: req.body.event})
 //   .then(function(event){
 //     console.log('EVENT', event);
 //     event.addUser(guest);
 //     next();
 //   });
 // });
};