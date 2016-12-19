'use strict';
// ******************************************* storing username for local storage ***************
var nameForm = document.getElementById('nameForm');
var storyArray = [];

// EVENT HANDLERS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function setName(event){

  event.preventDefault();

  var nameInput = document.getElementById('nameInput');
  var userName = event.target.nameInput.value;
  var currentUser = userName;

  new UserStory(userName);
  sendToLocalStorage('story', storyArray);
  sendToLocalStorage('currentUser', currentUser);

  window.location.href = 'avatar.html';

}

// ***************************************** event listeners *********************
nameForm.addEventListener('submit', setName);

// ******************************************************************************************

function sendToLocalStorage(userKey, something){
  var stringifiedName = JSON.stringify(something);
  // var currentUserKey = JSON.stringify(userKey);
  localStorage.setItem(userKey, stringifiedName);

  // console.log(currentUserKey, stringifiedName);
}

function UserStory(userName) {
  this.name = userName,
  this.avatar = 'null',
  this.pathChosen = [],
  this.thingsDone = []

  storyArray.push(this)
}
