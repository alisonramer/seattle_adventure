'use strict';

var backButton = document.getElementById('backButton');
var stringifiedName = localStorage.getItem('currentUser');
var userName = JSON.parse(stringifiedName);
var stringifiedArray = localStorage.getItem('story');
var storyArray = JSON.parse(stringifiedArray);
var headerId = document.getElementById('Welcome');
var heroImageId = document.getElementById('heroImage');
var avatarImageId = document.getElementById('avatarImg')
var placeNamesArray = ['Seattle Center', 'Pike Place', 'The Aquarium', 'Gasworks', 'Alki Beach', 'The Locks', 'Lincoln Park', 'Lake Union'];

for (var i = 0; i < storyArray.length; i++) {

  if(storyArray[i].name===userName){
    var currentAvatar = storyArray[i].avatar;
  }
}

avatarImageId.src = '../img/avatars/' +currentAvatar +'.png';
console.log(currentAvatar, avatarImageId.src);
headerId.textContent = currentAvatar+' has gone to ' +placeNamesArray[heroImageId.alt];

function backToChoose(event) {
  event.preventDefault();

  sendToLocalStorage('story', storyArray);
  window.location.href = '../choosedestination.html';
}

function sendToLocalStorage(userKey, something){
  var stringifiedName = JSON.stringify(something);
  localStorage.setItem(userKey, stringifiedName);
}

backButton.addEventListener('click', backToChoose);
