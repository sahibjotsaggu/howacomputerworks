angular.module('app.routes', ['ui.router', 'door3.css'])
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/home');
	$stateProvider
	.state('home', {
		url: '/home',
		templateUrl: 'app/views/pages/home.html',
		css: '../dist/assets/css/home.min.css'
	})
	.state('other', {
		url: '/other',
		templateUrl: 'app/views/pages/other.html'
	})
	.state('search', {
		url: '/search',
		templateUrl: 'app/views/pages/search.html',
		css: '../dist/assets/css/search.min.css',
		controller: 'SearchController'
	})
	.state('about', {
		url: '/about',
		templateUrl: 'app/views/pages/about.html',
		css: '../dist/assets/css/about.min.css'
	});
}]);
