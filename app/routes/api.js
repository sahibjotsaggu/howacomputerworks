var passport = require('passport');

module.exports = function(express) {
	var apiRouter = express.Router();

	apiRouter.get('/login', function(req, res) {
		res.render('login', { env: process.env });
	});

	apiRouter.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/home');
	});

	apiRouter.get('/callback',
		passport.authenticate('auth0', { failureRedirect: '/login' }),
		function(req, res) {
			res.redirect(req.session.returnTo || '/user');
		});

	// test route to make sure everthing is working
	apiRouter.get('/', function(req, res) {
		res.json({ message: 'hooray! welcome to the api!' });
	});

	return apiRouter;
};	
