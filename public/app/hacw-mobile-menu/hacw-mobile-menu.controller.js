'use strict';

appControllers.controller('MobileMenuController', MobileMenuController);

MobileMenuController.$inject = ['$scope'];

function MobileMenuController($scope) {
	var vm = this;
	console.log('hello from mobile-menu');
}
