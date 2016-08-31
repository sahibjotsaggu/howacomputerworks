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
			expect(controller.topics.length).toEqual(10);
		});
	});

	describe("datafactory references", function() {
		it("should return the correct reference list", function() {
			var $scope = {};
			var controller = $controller('TopicController', {$scope: $scope, datafactory: datafactory});
			controller.currentTopic = 'hard-drive';
			expect(datafactory.getReferenceList(controller.currentTopic).length).toEqual(4);
			controller.currentTopic = 'motherboard';
			expect(datafactory.getReferenceList(controller.currentTopic).length).toEqual(3);
		});

		it("should have a item OR link that starts with 'http' if isLink is truthy", function() {
			var $scope = {};
			var controller = $controller('TopicController', {$scope: $scope, datafactory: datafactory});
			controller.currentTopic = 'hard-drive';
			var refList = datafactory.getReferenceList(controller.currentTopic)
			for (var refItem = 0; refItem < refList.length; refItem++) {
				if (refList[refItem].isLink) {
					if (!refList[refItem].link) {
						expect(refList[refItem].item.slice(0,4)).toEqual('http');
					}
				} else {
					expect(refList[refItem].link).toBeUndefined();
				}
			}
		});
	});

	describe("vm.getTopicName", function() {
		it("should return the correct topic text", function() {
			var $scope = {};
			var controller = $controller('TopicController', {$scope: $scope, datafactory: datafactory});
			controller.topics = datafactory.getTopics();
			for (var eachTopic = 0; eachTopic < controller.topics.length; eachTopic++) {
				controller.currentTopic = controller.topics[eachTopic].param;
				expect(controller.getTopicName()).toEqual(controller.topics[eachTopic].name);
			}
		});
	});
});
