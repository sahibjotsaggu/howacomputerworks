var passport = require('passport');
var authEnv = require('../../authenv');

module.exports = function(app, express) {
	var apiRouter = express.Router();

	apiRouter.get('/login', function(req, res) {
		res.render('login', { env: authEnv });
	});

	apiRouter.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/home');
	});

	apiRouter.get('/callback',
		passport.authenticate('auth0', { failureRedirect: '/404' }),
		function(req, res) {
			res.redirect(req.session.returnTo || '/user');
		});

	// test route to make sure everthing is working
	apiRouter.get('/', function(req, res) {
		res.json({ message: 'hooray! welcome to the api!' });
	});

	return apiRouter;
};	
