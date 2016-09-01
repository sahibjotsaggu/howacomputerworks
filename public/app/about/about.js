'use strict';

appControllers.controller('AboutController', AboutController);

AboutController.$inject = ['$scope', 'datafactory', '$sce'];

function AboutController($scope, datafactory, $sce) {
	var vm = this;
	var banner = datafactory.getBanner('about');
	$scope.heading = banner[0];
	$scope.subheading = $sce.trustAsHtml(banner[1]);
}
