'use strict';

var stringifiedName = localStorage.getItem('currentUser');
var userName = JSON.parse(stringifiedName);
var stringifiedArray = localStorage.getItem('story');
var storyArray = JSON.parse(stringifiedArray);
var imageArray = ['img/Seattle_Center.jpg', 'img/Pike_Place.jpg', 'img/aquarium.jpg']

var left = document.getElementById('left');
var right = document.getElementById('right');
var center = document.getElementById('center');

var goToJournal = document.getElementById('goToJournalButton');

for (var i = 0; i < storyArray.length; i++) {

  if(storyArray[i].name===userName){
    document.getElementById('avatarImg').src = 'img/avatars/' +storyArray[i].avatar +'.png';
    var currentAvatar = storyArray[i].avatar;
    var placesGone = storyArray[i].placesGone;
  }
}

function goToJournalFunction(event) {
  event.preventDefault();
  window.location.href = 'journal.html';

}

goToJournal.addEventListener('click', goToJournalFunction);
