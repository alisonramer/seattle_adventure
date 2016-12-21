'use strict';

var backButton = document.getElementById('backButton');
var stringifiedName = localStorage.getItem('currentUser');
var userName = JSON.parse(stringifiedName);
var stringifiedArray = localStorage.getItem('story');
var storyArray = JSON.parse(stringifiedArray);

for (var i = 0; i < storyArray.length; i++) {

  if(storyArray[i].name===userName){
    document.getElementById('avatarImg').src = '../img/avatars/' +storyArray[i].avatar +'.png';
    var currentAvatar = storyArray[i].avatar;
  }
}

function backToChoose(event) {
  event.preventDefault();

  for (var i = 0; i < storyArray.length; i++) {

    storyArray[i].placesGone.push('0');
    // console.log(storyArray[i].name, userName);
    if(storyArray[i].name === userName){
      console.log(storyArray[i].placesGone.length);
      if(storyArray[i].placesGone.length >= 3){
        // console.log('We whould be at end now')
        window.location.href = '../end.html'
      }
    }
  }

  sendToLocalStorage('story', storyArray);
  // console.log('we should be at choose now')
  window.location.href = '../chooseDestination.html';
}

function sendToLocalStorage(userKey, something){
  var stringifiedName = JSON.stringify(something);
  // var currentUserKey = JSON.stringify(userKey);
  localStorage.setItem(userKey, stringifiedName);
}

backButton.addEventListener('click', backToChoose);
console.log(currentAvatar);
