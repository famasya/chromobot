'use strict';

chrome.runtime.onInstalled.addListener(details => {
	console.log('previousVersion', details.previousVersion);
});

console.log('\'Allo \'Allo! Event Page for Browser Action');

chrome.browserAction.onClicked.addListener(function(activeTab){
    chrome.windows.create({
    	'url': "console.html",
    	'type' : 'popup',
    	'width': 800,
    	'height' : 800
    }, function(window){});
});