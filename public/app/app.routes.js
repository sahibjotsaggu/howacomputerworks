'use strict';

angular.module('app.routes', [
	'ui.router',
	'angularCSS'
])
.config(configure);

configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

function configure($stateProvider, $urlRouterProvider, $locationProvider) {
	$urlRouterProvider.otherwise('/home');
	$stateProvider
	.state('home', {
		url: '/home',
		templateUrl: 'app/homepage/homepage.html',
		css: {
			href: '../assets/css/homepage.css',
			persist: true
		},
		controller: 'HomeController',
		controllerAs: 'home'
	})
	.state('topic', {
		url: '/topic/:topicName',
		templateUrl: function($stateParams) {
			return 'app/topics/' + $stateParams.topicName + '.html';
		},
		css: '../assets/css/topics.css',
		controller: 'TopicController',
		controllerAs: 'topics'
	})
	.state('about', {
		url: '/about',
		templateUrl: 'app/about/about.html',
		css: {
			href: '../assets/css/about.css',
			persist: true
		}
	});

	// for pretty URL (remove # from URL)
	if (window.history && window.history.pushState) {
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});
	}
}
