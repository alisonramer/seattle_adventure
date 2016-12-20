'use strict';

var chooseDestinationBox = document.getElementById('chooseDestinationBox');
var stringifiedName = localStorage.getItem('currentUser');
var userName = JSON.parse(stringifiedName);
var stringifiedArray = localStorage.getItem('story');
var storyArray = JSON.parse(stringifiedArray);
var destinationArray = ['seattleCenter.html', 'pikePlace.html'];

// console.log(storyArray, userName, chooseDestinationBox);

// FUNCTIONS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function sendToLocalStorage(userKey, something){
  var stringifiedName = JSON.stringify(something);
  // var currentUserKey = JSON.stringify(userKey);
  localStorage.setItem(userKey, stringifiedName);

}

// EVENT HANDLERS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function setDestination(event){
  event.preventDefault();
  for (var i = 0; i < storyArray.length; i++) {

    if(storyArray[i].name === userName){
      for (var o = -1; o < storyArray[i].placesGone.length; o++) {

        if(storyArray[i].placesGone.includes(event.target.index) === false){
          storyArray[i].placesGone.push(event.target.index);
        }
      }
    }
  }
  sendToLocalStorage('story', storyArray);
  // console.log(destinationArray[event.target.index]);
  window.location.href = destinationArray[event.target.index];
}

// EVENT LISTENERS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

chooseDestinationBox.addEventListener('click', setDestination);
