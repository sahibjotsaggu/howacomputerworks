'use strict';

/**
* @desc focus directive that puts focus on text inputs
* @example <input type="text" focus="true">
*/

appDirectives.directive('focus', focus);

focus.$inject = ['$timeout'];

function focus($timeout) {
	return {
		scope: {
			trigger: '@focus'
		},
		link: function(scope, element) {
			scope.$watch('trigger', function(value) {
				if (value === 'true') {
					$timeout(function() {
						element[0].focus();
					});
				}
			});
		}
	};
}
