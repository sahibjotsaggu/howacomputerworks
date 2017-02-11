'use strict';

/**
* @desc hacw-mobile-menu directive that contains the site navigation on mobile screens
* @example <hacw-mobile-menu></hacw-mobile-menu>
*/

appDirectives.directive('hacwMobileMenu', hacwMobileMenu);

function hacwMobileMenu() {
	return {
		restrict: 'E',
		templateUrl: 'app/hacw-mobile-menu/hacw-mobile-menu.html'
	};
}
