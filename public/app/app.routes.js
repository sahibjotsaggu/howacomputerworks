'use strict';

angular.module('app.routes', [
	'ui.router',
	'angularCSS'
])
.config(configure);

configure.$inject = ['$stateProvider', '$urlRouterProvider'];

function configure($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');
	$stateProvider
	.state('home', {
		url: '/home',
		templateUrl: 'app/homepage/homepage.html',
		css: '../assets/css/homepage.css',
		controller: 'HomeController'
	})
	.state('other', {
		url: '/other',
		templateUrl: 'app/views/pages/other.html'
	})
	.state('search', {
		url: '/search',
		templateUrl: 'app/views/pages/search.html',
		css: '../assets/css/search.css',
		controller: 'SearchController'
	})
	.state('about', {
		url: '/about',
		templateUrl: 'app/views/pages/about.html',
		css: '../assets/css/about.css'
	});
}