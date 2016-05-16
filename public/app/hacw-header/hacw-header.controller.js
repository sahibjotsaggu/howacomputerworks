'use strict';

appControllers.controller('HeaderController', HeaderController);

HeaderController.$inject = ['$scope'];

function HeaderController($scope) {
	var vm = this;

	vm.searchActive = false;
	
	vm.searchStyle = {
		width: '0px', 
		color: 'white', 
		fontSize: '17px',
		visibility: 'hidden',
		borderBottomColor: 'white',
		'-webkit-transition': 'width 0.3s, margin-left 0.3s, visibility 0.3s'
	};

	// Toggling the search bar 
	vm.searchBarToggle = function(stateOfSearch) {
		if (stateOfSearch === false) {
			vm.searchActive = true;
			vm.searchStyle.visibility = 'visible';
			vm.searchStyle.width = '350px';
			vm.searchStyle.marginLeft = '-350px';
			$('.main-search').focus();
		}
		else {
			vm.searchActive = false;
			vm.searchStyle.width = '0px';
			vm.searchStyle.marginLeft = '0px';
			vm.searchStyle.visibility = 'hidden';
		}
		
	};
}