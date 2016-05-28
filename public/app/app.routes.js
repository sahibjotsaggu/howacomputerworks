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
		controller: 'HomeController',
		controllerAs: 'home'
	})
	.state('topic', {
		url: '/topic/:topicName',
		templateUrl: function($stateParams) {
			return 'app/topics/' + $stateParams.topicName + '.html';
		}
	});
}
