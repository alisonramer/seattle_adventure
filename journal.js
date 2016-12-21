'use strict';

var stringifiedName = localStorage.getItem('currentUser');
var userName = JSON.parse(stringifiedName);
var stringifiedArray = localStorage.getItem('story');
var storyArray = JSON.parse(stringifiedArray);
var imageArray = ['img/Seattle_Center.jpg', 'img/Pike_Place.jpg', 'img/aquarium.jpg'];

var firstPlace = document.getElementById('firstPlace');
var secondPlace = document.getElementById('secondPlace');
var thirdPlace = document.getElementById('thirdPlace');


for (var i = 0; i < storyArray.length; i++) {

  if(storyArray[i].name===userName){
    document.getElementById('avatarImg').src = 'img/avatars/' +storyArray[i].avatar +'.png';
    var currentAvatar = storyArray[i].avatar;
    var placesGone = storyArray[i].placesGone;
  }
}

console.log(userName, currentAvatar, placesGone);

firstPlace.src = imageArray[placesGone[0]];
secondPlace.src = imageArray[placesGone[1]];
thirdPlace.src = imageArray[placesGone[2]];
