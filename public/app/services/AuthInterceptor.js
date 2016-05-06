(function() {
	'use strict';

	angular.module('AuthInterceptor',[])
	.factory(AuthInterceptor);

	AuthInterceptor.$inject = ['$q', '$location', 'AuthToken'];

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