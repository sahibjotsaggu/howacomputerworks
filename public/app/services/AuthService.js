(function() {
	'use strict';
	
	angular.module('AuthService', [])
	.factory('Auth', Auth)
	.factory('AuthToken', AuthToken)
	.factory('AuthInterceptor', AuthInterceptor);

	Auth.$inject = ['$http', '$q', 'AuthToken'];
	AuthToken.$inject = ['$window'];
	AuthInterceptor.$inject = ['$q', '$location', 'AuthToken'];

	function Auth($http, $q, AuthToken) {
		var authFactory = {};
		authFactory.createSampleUser = function() {
			$http.post('/api/sample');
		};
		return authFactory;
	}

	function AuthToken($window) {
		var authTokenFactory = {};
		authTokenFactory.getToken = function() {
			return $window.localStorage.getItem('token');
		};
		authTokenFactory.setToken = function(token) {
			if (token) {
				$window.localStorage.setItem('token', token);
			}
			else {
				$window.localStorage.removeItem('token');
			}
		};
		return authTokenFactory;
	}

	function AuthInterceptor($q, $location, AuthToken) {
		var interceptorFactory = {};
		interceptorFactory.request = function(config) {
			var token = AuthToken.getToken();
			if (token) {
				config.headers['x-access-token'] = token;
			}
			return config;
		};

		interceptorFactory.responseError = function(response) {
			if (response.status == 403) {
				AuthToken.setToken();
				$location.path('/login');
			}
			return $q.reject(response);
		};
		return interceptorFactory;
	}
}());
