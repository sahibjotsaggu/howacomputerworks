var bodyParser = require('body-parser');
var User = require('../models/user');
var Search = require('../models/search');
var jwt = require('jsonwebtoken');
var config = require('../../config');
var mystery = config.secret;

module.exports = function(app, express) {
	var apiRouter = express.Router();

	apiRouter.post('/sample', function(req, res) {
		User.findOne({'username' : 'snaekthemaster'}, function(err, user) {
			// if the sample user doesn't exist
			if (!user) {
				var firstUser = new User();
				firstUser.name = 'Sahibjot';
				firstUser.username = 'snaekthemaster';
				firstUser.password = 'mastertesting';
				firstUser.save();
				res.json({
					success: true,
					message: 'snaekthemaster created.'
				});
			// if the sample user does exist
			} else {
				// update password to 'mastertesting' if 'snaekthemaster' exists
				user.password = 'mastertesting';
				user.save();
				res.json({
					success: true,
					message: 'Password updated for snaekthemaster.'
				});
			}
		});
	});
	// AUTHENTICATE USER
	// ===============================

	apiRouter.post('/authenticate', function(req, res) {
		// find the user
		User.findOne({
			username: req.body.username
		}).select('name username password').exec(function(err, user) {
			if (err) throw err;
			// no user was found
			if (!user) {
				res.json({
					success: false,
					message: 'Authentication failed. User not found.'
				});
			// user was found
			} else if (user) {
				var validPass = user.comparePassword(req.body.password);
				// if the password does not match
				if (!validPass) {
					res.json({
						success: false,
						message: 'Authentication failed. Wrong password.'
					});
				// if the password matches
				} else {
					// create a token
					var token = jwt.sign({
						name: user.name,
						username: user.username
					}, mystery, {
						expiresIn: '12h'
					});

					// return token as JSON
					res.json({
						success: true,
						message: 'Token successfully created.',
						token: token
					});
				}
			}
		});
	});

	// ROUTE MIDDLEWARE TO VERIFY TOKEN
	// NEED AUTHENTICATION TO ACCESS /users ROUTE
	apiRouter.use('/users', function(req, res, next) {
		console.log('A user has entered.');
		// check URL, header, or post parameters for token
		var token = req.query.token || req.headers['x-access-token'] || req.body.token;
		// decode token
		if (token) {
			jwt.verify(token, mystery, function(err, decoded) {
				if (err) {
					res.status(403).send({
						success: false,
						message: 'Failed to authenticate token.'
					});
				} else {
					req.decoded = decoded;
					next();
				}
			});
		} else {
			res.status(403).send({
				success: false,
				message: 'No token provided or token has expired.'
			});
		}
	});

	apiRouter.get('/', function(req, res) {
		res.json({message: 'Welcome to the api'});
	});

	// ROUTES THAT END IN /users
	// =================================

	apiRouter.route('/users')
	.post(function(req, res) {
		var user = new User();
		user.name = req.body.name;
		user.username = req.body.username;
		user.password = req.body.password;

		user.save(function(err) {
			if (err) {
				if (err.code == 11000) {
					return res.json({
						success: false,
						message: 'A user with that username already exists.'
					});
				}
				else {
					return res.send(err);
				}
			}
			res.json({message: 'User created.'});
		});
	})
	.get(function(req, res) {
		User.find({}, function(err, users) {
			if (err) res.send(err);
			res.json(users);
		});
	});

	// ROUTES THAT END IN /users/:user_id
	// =================================

	apiRouter.route('/users/:user_id')
	.get(function(req, res) {
		User.findById(req.params.user_id, function(err, user) {
			if (err) res.send(err);
			res.json(user);
		});
	})
	.put(function(req, res) {
		User.findById(req.params.user_id, function(err, user) {
			if (err) res.send(err);
			if (req.body.name) user.name = req.body.name;
			if (req.body.username) user.username = req.body.username;
			if (req.body.password) user.password = req.body.password;

			user.save(function(err) {
				if (err) res.send(err);
				res.json({message: 'User updated!'});
			});
		});
	})
	.delete(function(req, res) {
		User.remove({
			_id: req.params.user_id
		}, function(err, user) {
			if (err) res.send(err);
			res.json({message: 'Successfully deleted.'});
		});
	});

	// ROUTES THAT END IN /search
	// =======================================

	apiRouter.route('/search')
	.post(function(req, res) {
		var newSearchTerm = new Search();
		newSearchTerm.topic_name = req.body.topic_name;
		newSearchTerm.link = req.body.link;
		//newSearchTerm.topic_name = 'Hard Drive';
		//newSearchTerm.link = 'other';
		newSearchTerm.save(function(err) {
			if (err) {
				if (err.code == 11000) {
					return res.json({
						success: false,
						message: 'A search term with that topic already exists.'
					});
				}
				else {
					return res.send(err);
				}
			}
			console.log('ayy');
			res.json({message: 'Search term created.'});
		});
	});

	// ROUTES THAT END IN /search/:search_term
	// ======================================

	apiRouter.route('/search/:search_term')
	.get(function(req, res) {
		Search.find({
			topic_name: req.params.search_term
		}, function(err, search_result) {
			if (err) res.send(err);
			res.json(search_result);
			console.log(search_result);
		});
	});

	// API ENDPOINT TO GET CURRENT USER INFORMATION
	apiRouter.get('/me', function(req, res) {
		res.send(req.decoded);
	});

	return apiRouter;
};
