'use strict';

angular.module('DataService', [])
.factory('datafactory', datafactory);

function datafactory() {
	var topics = [
		{name: 'Hard Drive', param: 'hard-drive'},
		{name: 'Motherboard', param: 'motherboard'},
		{name: 'Random Access Memory', param: 'ram'},
		{name: 'Central Processing Unit', param: 'cpu'},
		{name: 'Graphics Card', param: 'graphics-card'},
		{name: 'Sound Card', param: 'sound-card'},
		{name: 'Computer Monitor', param: 'computer-monitor', icon: 'desktop_windows'},
		{name: 'Keyboard', param: 'keyboard', icon: 'keyboard'},
		{name: 'Optical Drive', param: 'optical-drive'},
		{name: 'Power Supply', param: 'power-supply', icon: 'power'}
	];

	var references = [
		{
			param: 'hard-drive',
			reference_list: [
				{item: 'http://pages.cs.wisc.edu/~remzi/OSTEP/file-disks.pdf', link: '', isLink: true},
				{item: 'Slow Mo Guys video on Hard Drives', link: 'https://www.youtube.com/watch?v=3owqvmMf6No', isLink: true},
				{item: 'http://www.explainthatstuff.com/harddrive.html', link: '', isLink: true},
				{item: 'PC Hardware: The Complete Reference by Craig Zacker and John Rourke. Osborne/McGraw-Hill. Berkeley, California, 2001.', isLink: false}
			]
		},
		{
			param: 'motherboard',
			reference_list: [
				{item: 'http://www.computerhope.com/jargon/m/mothboar.htm', link: '', isLink: true},
				{item: 'http://computer.howstuffworks.com/motherboard.htm', link: '', isLink: true},
				{item: 'http://jennalieske.blogspot.ca/2014/09/architecture-of-computer.html', link: '', isLink: true}
			]
		}
	];

    var data = {
        getTopics: getTopics,
        getReferenceList: getReferenceList
    };

    return data;

    function getTopics() {
    	return topics;
    };

    function getReferenceList(param) {
    	for (var r = 0; r < references.length; r++) {
    		if (references[r].param === param) {
    			return references[r].reference_list;
    		}
    	}
    };
}
