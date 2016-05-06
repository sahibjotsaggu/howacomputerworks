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
		var service = {
			createSampleUser: createSampleUser
		};

		return service;

		function createSampleUser() {
			$http.post('/api/sample');
		}
	}

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

	function AuthInterceptor($q, $location, AuthToken) {
		var service = {
			request: request,
			responseError: responseError
		};

		return service;

		function request(config) {
			var token = AuthToken.getToken();

			if (token) {
				config.headers['x-access-token'] = token;
			}

			return config;
		}

		function responseError(response) {
			if (response.status === 403) {
				AuthToken.setToken();
				$location.path('/home');
			}

			return $q.reject(response);
		}
	}

}());
