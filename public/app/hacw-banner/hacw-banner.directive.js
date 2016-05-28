'use strict';

appDirectives.directive('hacwBanner', hacwBanner);

function hacwBanner() {
	return {
		restrict: 'E',
		templateUrl: 'app/hacw-banner/hacw-banner.html'
	};
}