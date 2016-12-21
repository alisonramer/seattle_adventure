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

  window.location.href = '../chooseDestination.html';
}


backButton.addEventListener('click', backToChoose);
console.log(currentAvatar);
