'use strict';

appDirectives.directive('hacwSidenav', hacwSidenav);

function HeaderController() {
	var vm = this;
}

function hacwSidenav() {
	return {
		restrict: 'E',
		templateUrl: 'app/hacw-sidenav/hacw-sidenav.html'
	};
}
