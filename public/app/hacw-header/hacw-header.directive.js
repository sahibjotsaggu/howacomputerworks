'use strict';

/**
* @desc hacw-header directive that contains custom header elements
* @example <hacw-header></hacw-header>
*/


appDirectives.directive('hacwHeader', hacwHeader);

function hacwHeader() {
	return {
		restrict: 'E',
		templateUrl: 'app/hacw-header/hacw-header.html'
	};
}
