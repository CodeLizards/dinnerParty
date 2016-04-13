//Serve it up!
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');
var cors = require('cors');
var app = express();
var port = 3000;
var cors = require('cors');


// CORS FOR CROSS ORIGIN REQUESTS
// app.all('/*', function(req, res, next) {
//   console.log('HEADERS');
//     res.set("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.set('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
//     res.set('Access-Control-Allow-Credentials', true);
//     next();
// });

// app.use(function(req, res, next) {
//     res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });

// var defaultCorsHeaders = {
//   'access-control-allow-origin': '*',
//   'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
//   'access-control-allow-headers': 'content-type, accept',
//   'access-control-max-age': 10 // Seconds.
// };
// var headers = defaultCorsHeaders;
// headers['Content-Type'] = 'application/json';

// use it before all route definitions
// app.use(cors({origin: 'http://localhost:3000'}));

// app.use(methodOverride('X-HTTP-METHOD-Override'));
// app.options('*', cors());
// app.use(cors());
// var whitelist = ['http://localhost:3000', 'https://accounts.google.com'];
// var corsOptions = {
//   origin: function(origin, callback){
//     var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
//     callback(null, originIsWhitelisted);
//   }
// };

//PARSING
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//SERVE UP STATIC FILES
app.use(express.static(path.join(__dirname + '/../client/')));


//CROSS ORIGINE REQUESTS
app.use(cors());

var whitelist = ['http://localhost:8080/'];
var corsOptions = {
  origin: function(origin, callback){
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  }
};

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
