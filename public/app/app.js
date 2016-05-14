'use strict';

angular.module('hacw', [
	'ui.filters',
	'app.routes',
	'app.services',
	'app.controllers',
	'app.directives',
	'ngMaterial',
	'ngMdIcons'
])
.config(configure)
.run(runBlock);

configure.$inject = ['$httpProvider', '$mdThemingProvider'];

function configure($httpProvider, $mdThemingProvider) {
	$httpProvider.interceptors.push('AuthInterceptor');

	/*
	Available palettes: red, pink, purple, deep-purple, 
	indigo, blue, light-blue, cyan, teal, green, 
	light-green, lime, yellow, amber, orange, deep-orange,
	brown, grey, blue-grey
	*/

	$mdThemingProvider.theme('default')
	.primaryPalette('amber')
	.accentPalette('orange');
}

function runBlock() {
	console.log('HACW is ready for Angular Material!');
}
