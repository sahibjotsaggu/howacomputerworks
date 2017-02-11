var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var path = require('path');
var config = require('./config');
var passport = require('passport');
var Auth0Strategy = require('passport-auth0');
var dotenv = require('./.env');
dotenv.load();

/* 
the following 11 lines are to fix the 
https://github.com/Automattic/mongoose/issues/4950
issue about mpromise deprecation.
*/
mongoose.Promise = global.Promise;

try {
	exec();
} catch (error) {
	console.error(error);
}

function exec() {
	mongoose.connect(config.database);
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
	next();
});

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

var strategy = new Auth0Strategy({
	domain:       authEnv.AUTH0_DOMAIN,
	clientID:     authEnv.AUTH0_CLIENT_ID,
	clientSecret: authEnv.AUTH0_CLIENT_SECRET,
	callbackURL:  authEnv.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
	}, function(accessToken, refreshToken, extraParams, profile, done) {
	// accessToken is the token to call Auth0 API (not needed in the most cases)
	// extraParams.id_token has the JSON Web Token
	// profile has all the information from the user
	return done(null, profile);
});

passport.use(strategy);

// This can be used to keep a smaller payload
passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(user, done) {
	done(null, user);
});

app.use(passport.initialize());
app.use(passport.session());

var apiRoutes = require('./app/routes/api')(app, express);
app.use('/api', apiRoutes);

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

app.listen(config.port);
console.log('Server started on localhost:' + config.port);
