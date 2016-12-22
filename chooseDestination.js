'use strict';
var leftRandom = 0;
var centerRandom = 0;
var rightRandom = 0;
var previouslyDisplayed =[];
var chooseDestinationBox = document.getElementById('chooseDestinationBox');
var stringifiedName = localStorage.getItem('currentUser');
var userName = JSON.parse(stringifiedName);
var stringifiedArray = localStorage.getItem('story');
var storyArray = JSON.parse(stringifiedArray);
var destinationArray = ['seattleCenter/seattleCenter.html', 'PikePlace/pikePlace.html', 'aquarium/aquarium.html', 'gasworks/gasworks.html' ,'alki/alki.html','locks/locks.html', 'lincoln/lincoln.html', 'lakeunion/lakeunion.html'];

var imageArray = ['img/Seattle_Center.jpg', 'img/Pike_Place.jpg', 'img/aquarium.jpg', 'img/gasworks/gasworks.jpg', 'img/alki/beach.jpg', 'img/locks/locks.jpg', 'img/lincoln/foresttrail.jpg', 'img/lakeunion/mohai.jpg']


var left = document.getElementById('left');
var right = document.getElementById('right');
var center = document.getElementById('center');


for (var i = 0; i < storyArray.length; i++) {
  if(storyArray[i].name===userName){
    console.log(storyArray[i].placesGone, storyArray[i].placesGone.length);
    document.getElementById('avatarImg').src = 'img/avatars/' +storyArray[i].avatar +'.png';
    var currentAvatar = storyArray[i].avatar;

    if(storyArray[i].placesGone.length >= 3){
      window.location.href = 'end.html';
    }
  }
}

// var headerTextElement = document.getElementById('headerTextElement');

document.getElementById('headerTextElement').textContent = currentAvatar+' has escaped from the Zoo! Where do you want to go?';

// FUNCTIONS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// ******************************** randomize the images ****************
function randomizeNumber() {
  leftRandom = Math.floor(Math.random() * 8);
  while (previouslyDisplayed.indexOf(leftRandom) > -1) {
    leftRandom = Math.floor(Math.random() * 8);
  }
  previouslyDisplayed.push(leftRandom);
  centerRandom = Math.floor(Math.random() * 8);
  while (previouslyDisplayed.indexOf(centerRandom) > -1) {
    centerRandom = Math.floor(Math.random() * 8);
  }
  previouslyDisplayed.push(centerRandom);
  rightRandom = Math.floor(Math.random() * 8);
  while (previouslyDisplayed.indexOf(rightRandom) > -1) {
    rightRandom = Math.floor(Math.random() * 8);
  }
  previouslyDisplayed.push(rightRandom);
}


// ***************************************************************************
function sendToLocalStorage(userKey, something){
  var stringifiedName = JSON.stringify(something);
  localStorage.setItem(userKey, stringifiedName);
}

function setChoices(){

  left.src = imageArray[leftRandom];
  center.src = imageArray[centerRandom];

  right. src = imageArray[rightRandom];
}

randomizeNumber();
setChoices();

// EVENT HANDLERS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function setDestination(event){
  event.preventDefault();

  var destinationChoice = event.target.id;
  if (destinationChoice === 'chooseDestinationBox') {
    return alert('Please click a destination image');
  }

  if (destinationChoice === 'left'){
    for (var i = 0; i < storyArray.length; i++) {
      if(storyArray[i].name === userName){
        storyArray[i].placesGone.push(leftRandom);
      }
    }
    window.location.href = destinationArray[leftRandom];
  }

  if (destinationChoice === 'center'){
    for (var j = 0; j < storyArray.length; j++) {
      if(storyArray[j].name === userName){
        storyArray[j].placesGone.push(leftRandom);
      }
    }
    window.location.href = destinationArray[centerRandom];
  }

  if (destinationChoice === 'right'){
    for (var k = 0; k < storyArray.length; k++) {
      if(storyArray[k].name === userName){
        storyArray[k].placesGone.push(leftRandom);
      }
    }
    window.location.href = destinationArray[rightRandom];
  }
  sendToLocalStorage('story', storyArray);
}


// EVENT LISTENERS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

chooseDestinationBox.addEventListener('click', setDestination);
