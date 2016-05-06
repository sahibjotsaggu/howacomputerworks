(function() {
	'use strict';

	angular.module('AuthToken', [])
	.factory(AuthToken);

	AuthToken.$inject = ['$window'];

	function AuthToken($window) {
		var service = {
			getToken: getToken,
			setToken: setToken
		};

		return service;

		function getToken() {
			return $window.localStorage.getItem('token');
		}

		function setToken(token) {
			return $window.localStorage.setItem('token', token);
		}
	}

}());