(function() {
	'use strict';
	
	angular.module('hacw', [
		'app.routes',
		'ui.filters',
		'app.services',
		'app.controllers'
	])
	.config('configure', configure);

	configure.$inject = ['$httpProvider'];

	function configure($httpProvider) {
		$httpProvider.interceptors.push('AuthInterceptor');
	}

}());
