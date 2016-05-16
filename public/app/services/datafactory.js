'use strict';

angular.module('DataService', [])
.factory('datafactory', datafactory);

function datafactory() {
	var topics = [
		{name: 'Hard Drive', stateName: 'topic', param: 'hard-drive'},
		{name: 'Optical Drive', stateName: 'topic', param: 'optical-drive'},
		{name: 'Random Access Memory', stateName: 'topic', param: 'ram'},
		{name: 'Central Processing Unit', stateName: 'topic', param: 'cpu'},
		{name: 'Power Supply', stateName: 'topic', param: 'power-supply', icon: 'power'},
		{name: 'Keyboard', stateName: 'topic', param: 'keyboard', icon: 'keyboard'},
		{name: 'Graphics Card', stateName: 'topic', param: 'graphics-card'},
		{name: 'Sound Card', stateName: 'topic', param: 'sound-card'},
		{name: 'Computer Monitor', stateName: 'topic', param: 'computer-monitor', icon: 'desktop_windows'}
	];

    var data = {
        getTopics: getTopics
    };

    return data;

    function getTopics() {
    	return topics;
    };
}
