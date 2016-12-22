'use strict';

var stringifiedName = localStorage.getItem('currentUser');
var userName = JSON.parse(stringifiedName);
var stringifiedArray = localStorage.getItem('story');
var storyArray = JSON.parse(stringifiedArray);
var imageArray = ['img/seattleCenter/Seattle_Center.jpg', 'img/pikePlace/Pike_Place.jpg', 'img/aquarium/aquarium.jpg', 'img/gasworks/gasworks.jpg', 'img/alki/beach.jpg', 'img/locks/locks.jpg', 'img/lincoln/foresttrail.jpg', 'img/lakeunion/mohai.jpg']
var placeNamesArray = ['Seattle Center', 'Pike Place', 'The Aquarium', 'Gasworks', 'Alki Beach', 'The Locks', 'Lincoln Park', 'Lake Union'];

var headerId = document.getElementById('headerId');
var firstPlaceText = document.getElementById('firstPlaceText');
var secondPlaceText = document.getElementById('secondPlaceText');
var thirdPlaceText = document.getElementById('thirdPlaceText');
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

headerId.textContent = userName+' the '+currentAvatar+' has been to many places today!'
firstPlaceText.textContent = 'First '+userName+' the '+currentAvatar+ ' went to ' +placeNamesArray[placesGone[0]]+'!';
secondPlaceText.textContent = 'Then '+userName+' the '+currentAvatar+' went to ' +placeNamesArray[placesGone[1]]+'!';
thirdPlaceText.textContent = 'Finally ' +userName+' the '+currentAvatar+' went to ' +placeNamesArray[placesGone[2]]+'!';

console.log(userName, currentAvatar, placesGone);

firstPlace.src = imageArray[placesGone[0]];
secondPlace.src = imageArray[placesGone[1]];
thirdPlace.src = imageArray[placesGone[2]];
