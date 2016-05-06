(function() {
	'use strict';

	angular.module('app.routes', [
		'ui.router',
		'door3.css'
	])
	.config('configure', configure);

	configure.$inject = ['$stateProvider', '$urlRouterProvider'];

	function configure($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
		$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'app/views/pages/home.html',
			css: '../assets/css/home.min.css'
		})
		.state('other', {
			url: '/other',
			templateUrl: 'app/views/pages/other.html'
		})
		.state('search', {
			url: '/search',
			templateUrl: 'app/views/pages/search.html',
			css: '../assets/css/search.min.css',
			controller: 'SearchController'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'app/views/pages/about.html',
			css: '../assets/css/about.min.css'
		});
	}

}());
