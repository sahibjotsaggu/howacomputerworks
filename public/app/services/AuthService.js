(function() {
	'use strict';
	angular.module('AuthService', [
		'Auth',
		'AuthToken',
		'AuthInterceptor'
	]);

}());
