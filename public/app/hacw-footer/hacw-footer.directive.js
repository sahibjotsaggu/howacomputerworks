'use strict';

/**
* @desc hacw-footer directive that contains custom footer elements
* @example <hacw-footer></hacw-footer>
*/

appDirectives.directive('hacwFooter', hacwFooter);

function hacwFooter() {
	return {
		restrict: 'E',
		templateUrl: 'app/hacw-footer/hacw-footer.html'
	};
}