(function() {
	'use strict';

	angular.module('Auth', [])
	.factory(Auth);

	Auth.$inject = ['$http', '$q', 'AuthToken'];

	function Auth($http, $q, AuthToken) {
		var service = {
			createSampleUser: createSampleUser
		};

		return service;

		function createSampleUser() {
			$http.post('/api/sample');
		}
	}

}());