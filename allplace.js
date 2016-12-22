'use strict';

var backButton = document.getElementById('backButton');
var stringifiedName = localStorage.getItem('currentUser');
var userName = JSON.parse(stringifiedName);
var stringifiedArray = localStorage.getItem('story');
var storyArray = JSON.parse(stringifiedArray);
var headerId = document.getElementById('Welcome');
var heroImageId = document.getElementById('heroImage');
var placeNamesArray = ['Seattle Center', 'Pike Place', 'The Aquarium', 'Gasworks', 'Alki Beach', 'The Locks', 'Lincoln Park', 'Lake Union'];

for (var i = 0; i < storyArray.length; i++) {

  if(storyArray[i].name===userName){
    document.getElementById('avatarImg').src = '../img/avatars/' +storyArray[i].avatar +'.png';
    var currentAvatar = storyArray[i].avatar;
  }
}

headerId.textContent = currentAvatar+' has gone to ' +placeNamesArray[heroImageId.alt];

function backToChoose(event) {
  event.preventDefault();

  sendToLocalStorage('story', storyArray);
  window.location.href = '../chooseDestination.html';
}

function sendToLocalStorage(userKey, something){
  var stringifiedName = JSON.stringify(something);
  localStorage.setItem(userKey, stringifiedName);
}

backButton.addEventListener('click', backToChoose);
