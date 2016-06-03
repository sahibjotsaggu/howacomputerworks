// SERVER SETUP
// ====================================

// REQUIRE ALL THE NECESSARY PACKAGES
// ====================================

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');
var port = process.env.PORT || 8030;

// APPLICATION CONFIGURATION
// ====================================

// use the body-parser to get information from POST requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// configure app to handle CORS requests (PROBABLY WON'T NEED THIS THO)
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
	next();
});

// log all the requests to the console
app.use(morgan('dev'));

// set static files location
// used for requests that our frontend will make
app.use(express.static(__dirname + '/public'));

// API ROUTES
// ====================================

// send user to main page
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

// START SERVER
// ====================================

app.listen(port);
console.log('Server started on localhost:' + port);