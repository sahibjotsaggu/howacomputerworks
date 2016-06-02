'use strict';

appControllers.controller('TopicController', TopicController);

TopicController.$inject = ['$scope', '$state', 'datafactory'];

function TopicController($scope, $state, datafactory) {
	var vm = this;
	vm.topics = datafactory.getTopics();
	$scope.$state = $state;
	vm.currentTopic = $scope.$state.params.topicName;
	for (var x = 0; x < vm.topics.length; x++) {
		if (vm.topics[x].param === vm.currentTopic) {
			vm.topicText = vm.topics[x].name;
			break;
		}
	}
}
