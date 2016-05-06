(function() {
	'use strict';

	angular.module('hacw', [
		'ui.filters',
		'app.routes',
		'app.services'
	])
	.config(configure);

	configure.$inject = ['$httpProvider'];

	function configure($httpProvider) {
		$httpProvider.interceptors.push('AuthInterceptor');
	}

}());
