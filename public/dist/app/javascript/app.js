angular.module('hacw', ['app.routes', 'ui.filters', 'AuthService', 'MainCtrl', 'SearchCtrl', 'searchService', 'userService'])
// APPLICATION CONFIGURATION TO INTEGRATE TOKEN INTO REQUESTS
// ===========================================================

.config(function($httpProvider){
	// attach auth interceptor to the http requests
	$httpProvider.interceptors.push('AuthInterceptor');
});
