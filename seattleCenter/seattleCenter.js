'use strict';

var chooseDestinationBox = document.getElementById('chooseDestinationBox');
var stringifiedName = localStorage.getItem('currentUser');
var userName = JSON.parse(stringifiedName);
var stringifiedArray = localStorage.getItem('story');
var storyArray = JSON.parse(stringifiedArray);
var seattleCenterArray = ['Space Needle', 'Fountain', 'Flowers'];

console.log(chooseDestinationBox, userName, storyArray, seattleCenterArray);

document.getElementById('headerTextElement').textContent = userName+' has run to the Seattle Center! Where do you want to go?';
