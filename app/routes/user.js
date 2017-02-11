var express = require('express');
var passport = require('passport');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
var router = express.Router();

router.get('/home', ensureLoggedIn, function(req, res, next) {
	res.render('user', { user: req.user });
});

module.exports = router;