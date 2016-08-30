describe("topics controller", function() {
	beforeEach(module('hacw'));

	var $controller, datafactory;

	beforeEach(inject(function(_$controller_) {
		$controller = _$controller_;
	}));

	beforeEach(inject(function(_datafactory_) {
		datafactory = _datafactory_;
	}));

	it("should exist", function() {
		expect($controller).toBeDefined();
	});

	describe("datafactory topics list", function() {
		it("should have a length of 9", function() {
			var $scope = {};
			var controller = $controller('TopicController', {$scope: $scope, datafactory: datafactory});
			controller.topics = datafactory.getTopics();
			expect(controller.topics.length).toEqual(9);
		});
	});

	describe("vm.getTopicName", function() {
		it("should return the correct topic text", function() {
			var $scope = {};
			var controller = $controller('TopicController', {$scope: $scope, datafactory: datafactory});
			controller.topics = datafactory.getTopics();
			controller.currentTopic = 'hard-drive';
			expect(controller.getTopicName()).toEqual('Hard Drive');
		});
	});
});
