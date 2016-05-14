'use strict';

appControllers.controller('HomeController', HomeController);

HomeController.$inject = ['$mdToast'];

function HomeController($mdToast) {
	var vm = this;

	var last = {
		bottom: false,
		top: true,
		left: false,
		right: true
	};

	vm.toastPosition = angular.extend({}, last);

	vm.getToastPosition = function() {
		sanitizePosition();

		return Object.keys(vm.toastPosition)
		.filter(function(pos) { return vm.toastPosition[pos]; })
		.join(' ');
	};

	vm.showSimpleToast = function() {
		$mdToast.show(
			$mdToast.simple()
			.textContent('Simple Toast!')
			.position(vm.getToastPosition())
			.hideDelay(3000)
		);
	};

	function sanitizePosition() {
		var current = vm.toastPosition;

		if ( current.bottom && last.top ) current.top = false;
		if ( current.top && last.bottom ) current.bottom = false;
		if ( current.right && last.left ) current.left = false;
		if ( current.left && last.right ) current.right = false;

		last = angular.extend({},current);
	}

}
