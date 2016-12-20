'use strict';

var chooseDestinationBox = document.getElementById('chooseDestinationBox');
var stringifiedName = localStorage.getItem('currentUser');
var userName = JSON.parse(stringifiedName);
var stringifiedArray = localStorage.getItem('story');
var storyArray = JSON.parse(stringifiedArray);
var destinationArray = ['seattleCenter.html', 'pikePlace.html'];
var imageArray = ['img/Seattle_Center.jpg', 'img/Pike_Place.jpg']
var destinationChoice;
var left = document.getElementById('left');
var right = document.getElementById('right');
var center = document.getElementById('center');

// console.log(storyArray, userName, chooseDestinationBox);

// FUNCTIONS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function sendToLocalStorage(userKey, something){
  var stringifiedName = JSON.stringify(something);
  // var currentUserKey = JSON.stringify(userKey);
  localStorage.setItem(userKey, stringifiedName);
}

function setChoices(){
  left.src = imageArray[0];
  center.src = imageArray[1];
  right. src = imageArray[2];
}
setChoices();
// EVENT HANDLERS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function setDestination(event){
  event.preventDefault();

  destinationChoice = event.target.id;
  if (destinationChoice === 'chooseDestinationBox') {
    return alert('Please click a destination image');
  }

  for (var i = 0; i < storyArray.length; i++) {

    if(storyArray[i].name === userName){
      for (var j = -1; j < storyArray[i].placesGone.length; j++) {

        if(storyArray[i].placesGone.includes(event.target.index) === false){
          storyArray[i].placesGone.push(event.target.index);
        }
      }
    }
  }
  sendToLocalStorage('story', storyArray);
  // console.log(destinationArray[event.target.index]);
  if (destinationChoice === 'left'){
    window.location.href = destinationArray[0];
  }
  if (destinationChoice === 'center'){
    window.location.href = destinationArray[1];
  }
  if (destinationChoice === 'right'){
    window.location.href = destinationArray[2];
  }
}

// EVENT LISTENERS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

chooseDestinationBox.addEventListener('click', setDestination);
