'use strict';

appControllers.controller('MainController', MainController);

MainController.$inject = ['$scope', '$state', 'datafactory', '$interval'];

function MainController($scope, $state, datafactory, $interval) {
	var vm = this;

	vm.topics = datafactory.getTopics();

	$scope.$state = $state;

	vm.currentWindowName = 'Home';

	//	vm.changeState(stateName, param, [topicName]); (optional)
	vm.changeState = function(stateName, param, topicName) {
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
		if (topicName) {
			vm.currentWindowName = topicName;
		}
	};
}
