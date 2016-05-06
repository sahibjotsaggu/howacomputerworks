angular.module('MainCtrl', ['ui.router'])
.controller('MainController', function($rootScope, $location, Auth) {
	var vm = this;
	vm.createSample = function() {
		Auth.createSampleUser();
	};
	// the filter in the ng-repeat also goes through the link...
	/*vm.topics = [
		{part: 'Hard Drive', link: 'other'},
		{part: 'CD Drive', link: 'other'},
		{part: 'Random Access Memory', link: 'other'},
		{part: 'Central Processing Unit', link: 'other'},
		{part: 'Power Supply', link: 'other'},
		{part: 'Keyboard', link: 'other'},
		{part: 'Cooling Fan', link: 'other'},
		{part: 'Graphics Card', link: 'other'},
		{part: 'Sound Card', link: 'other'}
	];*/

	// when the user types in the search box
	/*$('.search').keyup(function() {
		// if the input is a valid alphabet letter or space bar or back space
		//if (e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode == 32 || e.keyCode == 8) {
		//	search_term = search_term.concat(String.fromCharCode(e.keyCode).toLowerCase());
		//	console.log(vm.topics);
		var search_term = $(this).val();
		Search.get(search_term)
		.success(function(data){
			vm.searchResult = data;
			if (vm.searchResult.length > 0) {
				console.log('Oui');
				console.log(vm.searchResult);
				console.log(vm.searchResult[0]);
				vm.topics.push(vm.searchResult[0]);
			}
		});
	});*/
});
