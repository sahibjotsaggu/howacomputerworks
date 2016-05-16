'use strict';

appControllers.controller('MainController', MainController);

MainController.$inject = ['$state', '$mdSidenav', 'datafactory', '$interval'];

function MainController($state, $mdSidenav, datafactory, $interval) {
	var vm = this;

	vm.topics = datafactory.getTopics();

	vm.openSideMenu = function() {
		$mdSidenav('left').toggle();
	};

	vm.changeState = function(stateName, param) {
		console.log(stateName);
		console.log(param);
		if (param === undefined) {
			$state.go(stateName);
		}
		else {
			if (stateName === 'topic') {
				$state.go(stateName, {'topicName': param});
			}
		}
		$mdSidenav('left').toggle();
	};
}
