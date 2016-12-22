'use strict';

var stringifiedName = localStorage.getItem('currentUser');
var userName = JSON.parse(stringifiedName);
var stringifiedArray = localStorage.getItem('story');
var storyArray = JSON.parse(stringifiedArray);
var imageArray = ['img/seattlecenter/seattle_center.jpg', 'img/pikeplace/pike_place.jpg', 'img/aquarium/aquarium.jpg', 'img/gasworks/gasworks.jpg', 'img/alki/beach.jpg', 'img/locks/locks.jpg', 'img/lincoln/foresttrail.jpg', 'img/lakeunion/mohai.jpg'];
var placeNamesArray = ['Seattle Center', 'Pike Place', 'The Aquarium', 'Gasworks', 'Alki Beach', 'The Locks', 'Lincoln Park', 'Lake Union'];
var imageArraySubPlaces =[['fountain.jpeg', 'seattle_center.jpg', 'sonicbloom.jpg'], ['pig,jpg', 'magic_market.jpeg', 'flowers.jpeg'], ['jellyfish.jpg', 'seals.jpg', 'octopus.jpg'], ['arches.jpg', 'kite.jpg', 'hill.jpg'], ['kayak.jpg', 'lighthouse.jpg', 'kayak.jpg'], ['chinook.jpg', 'spillway.jpg', 'ladder.jpg'], ['playground.jpg', 'pool.jpg', 'oceanview.jpg'], ['boats.jpg', 'foutains.jpg', 'boatpond.jpg']];
var imagePaths = ['img/seattlecenter/', 'img/pikeplace/', 'img/aquarium', 'img/gasworks/', 'img/alki/', 'img/locks', 'img/lincoln/', 'img/lakeunion/'];

var headerId = document.getElementById('headerId');
var firstPlaceText = document.getElementById('firstPlaceText');
var secondPlaceText = document.getElementById('secondPlaceText');
var thirdPlaceText = document.getElementById('thirdPlaceText');
var firstPlace = document.getElementById('firstPlace');
var firstPlace1 = document.getElementById('firstPlace1');
var firstPlace2 = document.getElementById('firstPlace2');
var firstPlace3 = document.getElementById('firstPlace3');
var secondPlace = document.getElementById('secondPlace');
var secondPlace1 = document.getElementById('secondPlace1');
var secondPlace2 = document.getElementById('secondPlace2');
var secondPlace3 = document.getElementById('secondPlace3');
var thirdPlace = document.getElementById('thirdPlace');
var thirdPlace1 = document.getElementById('thirdPlace1');
var thirdPlace2 = document.getElementById('thirdPlace2');
var thirdPlace3 = document.getElementById('thirdPlace3');

for (var i = 0; i < storyArray.length; i++) {

  if(storyArray[i].name===userName){
    document.getElementById('avatarImg').src = 'img/avatars/' +storyArray[i].avatar +'.png';
    var currentAvatar = storyArray[i].avatar;
    var placesGone = storyArray[i].placesGone;
  }
}

headerId.textContent = userName+' '+currentAvatar+' has been to many places today!'
firstPlaceText.textContent = 'First '+userName+' '+currentAvatar+ ' went to ' +placeNamesArray[placesGone[0]]+'!';
secondPlaceText.textContent = 'Then '+userName+' '+currentAvatar+' went to ' +placeNamesArray[placesGone[1]]+'!';
thirdPlaceText.textContent = 'Finally ' +userName+' '+currentAvatar+' went to ' +placeNamesArray[placesGone[2]]+'!';

console.log(userName, currentAvatar, placesGone);

firstPlace.src = imageArray[placesGone[0]];
firstPlace1.src = imagePaths[placesGone[0]]+imageArraySubPlaces[placesGone[0]][0];
firstPlace2.src = imagePaths[placesGone[0]]+imageArraySubPlaces[placesGone[0]][1];
firstPlace3.src = imagePaths[placesGone[0]]+imageArraySubPlaces[placesGone[0]][2];
secondPlace.src = imageArray[placesGone[1]];
secondPlace1.src = imagePaths[placesGone[1]]+imageArraySubPlaces[placesGone[1]][0];
secondPlace2.src = imagePaths[placesGone[1]]+imageArraySubPlaces[placesGone[1]][1];
secondPlace3.src = imagePaths[placesGone[1]]+imageArraySubPlaces[placesGone[1]][2];
thirdPlace.src = imageArray[placesGone[2]];
thirdPlace1.src = imagePaths[placesGone[2]]+imageArraySubPlaces[placesGone[2]][0];
thirdPlace2.src = imagePaths[placesGone[2]]+imageArraySubPlaces[placesGone[2]][1];
thirdPlace3.src = imagePaths[placesGone[2]]+imageArraySubPlaces[placesGone[2]][2];
