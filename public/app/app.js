'use strict';

angular.module('hacw', [
	'ui.filters',
	'app.routes',
	'app.services',
	'app.controllers',
	'app.directives'
])
.config(configure)
.run(runBlock);

configure.$inject = ['$httpProvider'];

function configure($httpProvider, $mdThemingProvider) {
	$httpProvider.interceptors.push('AuthInterceptor');
}

function runBlock() {
	console.log('HACW is ready for Angular Material!');
}
