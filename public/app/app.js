'use strict';

angular.module('hacw', [
	'ui.filters',
	'app.routes',
	'app.services',
	'app.controllers',
	'app.directives'
])
.config(configure);

configure.$inject = ['$httpProvider'];

function configure($httpProvider, $mdThemingProvider) {
	$httpProvider.interceptors.push('AuthInterceptor');
}