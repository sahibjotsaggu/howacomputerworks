'use strict';

appDirectives
.controller('HeaderController', HeaderController)
.directive('hacwHeader', hacwHeader);

HeaderController.$inject = ['$mdSidenav'];

function HeaderController($mdSidenav) {
	var vm = this;
	
	vm.openSideMenu = buildToggler('left');

	function buildToggler(navID) {
		return function() {
			$mdSidenav(navID).toggle();
		};
	}
}

function hacwHeader() {
	return {
		restrict: 'E',
		templateUrl: 'app/hacw-header/hacw-header.html'
	};
}
