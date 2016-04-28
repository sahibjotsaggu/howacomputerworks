angular.module('searchService', [])
.factory('Search', function($http) {
	var searchFactory = {};
	searchFactory.find = function(keyword) {
		return $http.get('/api/search/' + keyword);
	};
	searchFactory.create = function(searchData) {
		return $http.post('/api/search/', searchData);
	};
	return searchFactory;
});