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
var destinationArray = ['seattleCenter/seattleCenter.html', 'PikePlace/pikePlace.html', 'aquarium/aquarium.html' ];

var imageArray = ['img/Seattle_Center.jpg', 'img/Pike_Place.jpg', 'img/aquarium.jpg']


var left = document.getElementById('left');
var right = document.getElementById('right');
var center = document.getElementById('center');


for (var i = 0; i < storyArray.length; i++) {
  if(storyArray[i].name===userName){

    document.getElementById('avatarImg').src = 'img/avatars/' +storyArray[i].avatar +'.png';
    var currentAvatar = storyArray[i].avatar;
  }
}
// var headerTextElement = document.getElementById('headerTextElement');

// console.log(storyArray, userName, chooseDestinationBox);
document.getElementById('headerTextElement').textContent = currentAvatar+' has escaped from the Zoo! Where do you want to go?';

// FUNCTIONS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// ******************************** randomize the images ****************
function randomizeNumber() {
  leftRandom = Math.floor(Math.random() * 3);
  while (previouslyDisplayed.indexOf(leftRandom) > -1) {
    leftRandom = Math.floor(Math.random() * 3);
  }
  previouslyDisplayed.push(leftRandom);
  centerRandom = Math.floor(Math.random() * 3);
  while (previouslyDisplayed.indexOf(centerRandom) > -1) {
    centerRandom = Math.floor(Math.random() * 3);
  }
  previouslyDisplayed.push(centerRandom);
  rightRandom = Math.floor(Math.random() * 3);
  while (previouslyDisplayed.indexOf(rightRandom) > -1) {
    rightRandom = Math.floor(Math.random() * 3);
  }
  previouslyDisplayed.push(rightRandom);
}


// ***************************************************************************
function sendToLocalStorage(userKey, something){
  var stringifiedName = JSON.stringify(something);
  // var currentUserKey = JSON.stringify(userKey);
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

  // for (var i = 0; i < storyArray.length; i++) {
  //
  //   if(storyArray[i].name === userName){
  //     for (var j = -1; j < storyArray[i].placesGone.length; j++) {
  //
  //       if(storyArray[i].placesGone.includes(event.target.alt) === false){
  //         storyArray[i].placesGone.push(event.target.alt);
  //       }
  //     }
  //   }
  // }

  sendToLocalStorage('story', storyArray);

  // console.log(destinationArray[event.target.index]);
  if (destinationChoice === 'left'){
    window.location.href = destinationArray[leftRandom];
  }
  if (destinationChoice === 'center'){
    window.location.href = destinationArray[centerRandom];
  }
  if (destinationChoice === 'right'){
    window.location.href = destinationArray[rightRandom];
  }

}

// EVENT LISTENERS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

chooseDestinationBox.addEventListener('click', setDestination);
