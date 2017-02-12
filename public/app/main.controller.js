'use strict';

appControllers.controller('MainController', MainController);

MainController.$inject = ['datafactory'];

function MainController(datafactory) {
	var vm = this;
	vm.topics = datafactory.getTopics();
	vm.toggleMobileMenu = function() {
		var mobileMenu = $('.mobile-menu');
		if (mobileMenu.hasClass('collapsed')) {
			mobileMenu.removeClass('collapsed');
		} else {
			mobileMenu.addClass('collapsed');
		}
		console.log('hey');
	};
}
