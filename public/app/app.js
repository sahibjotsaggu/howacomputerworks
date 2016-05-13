'use strict';

angular.module('hacw', [
	'ui.filters',
	'app.routes',
	'app.services',
	'app.controllers',
	'ngMaterial'
])
.config(configure)
.run(runBlock);

configure.$inject = ['$httpProvider'];

function configure($httpProvider) {
	$httpProvider.interceptors.push('AuthInterceptor');
}

function runBlock() {
	console.log('HACW is ready for Angular Material!');
}