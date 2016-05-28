'use strict';

/**
* @desc hacw-button directive contains the custom button
* @example <hacw-button></hacw-button>
*/


appDirectives.directive('hacwButton', hacwButton);

function hacwButton() {
	return {
		restrict: 'E',
		scope: {
			value: '@'
		},
		templateUrl: 'app/hacw-button/hacw-button.html',
		link: function(scope, element, attr) {
			attr.value = attr.value.toUpperCase();
		}
	};
}
