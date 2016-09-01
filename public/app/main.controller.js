'use strict';

appControllers.controller('MainController', MainController);

MainController.$inject = ['datafactory'];

function MainController(datafactory) {
	var vm = this;
	vm.topics = datafactory.getTopics();
}
