//Serve it up!
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');
var cors = require('cors');
var app = express();
var port = 3000;
var cors = require('cors');


//PARSING
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//SERVE UP STATIC FILES
app.use(express.static(path.join(__dirname + '/../client/')));



//GOOGLE AUTHENTICATION
require('./routes/config.js')(app, express);
//TODO: further modularize code for routing use below line:
// require('./routes/PartyRouter.js')(app, express);


//ROUTING
var partyRouter = require(path.join(__dirname + '/routes/PartyRouter.js'));
app.use(partyRouter);

//START APP ON PORT 3000
app.listen( port, function(err){
  if(err) {
    return console.log('error listening on port 3000', err);
  }
  console.log('App is listening on port 3000!');
});
