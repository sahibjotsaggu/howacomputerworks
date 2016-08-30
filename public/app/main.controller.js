'use strict';

appControllers.controller('MainController', MainController);

MainController.$inject = ['$scope', '$state', 'datafactory', '$interval'];

function MainController($scope, $state, datafactory, $interval) {
	var vm = this;
	vm.topics = datafactory.getTopics();
}
