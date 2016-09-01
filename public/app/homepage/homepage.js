'use strict';

appControllers.controller('HomeController', HomeController);

HomeController.$inject = ['$scope', 'datafactory', '$sce'];

function HomeController($scope, datafactory, $sce) {
	var vm = this;
	var banner = datafactory.getBanner('home');
	$scope.heading = banner[0];
	$scope.subheading = $sce.trustAsHtml(banner[1]);
}
