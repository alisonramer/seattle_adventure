'use strict';

var chooseDestinationBox = document.getElementById('avatarBox');
var stringifiedName = localStorage.getItem('currentUser');
var userName = JSON.parse(stringifiedName);
// console.log(stringifiedName, userName);

var stringifiedArray = localStorage.getItem('story');
var storyArray = JSON.parse(stringifiedArray);

console.log(storyArray, userName, chooseDestinationBox);
