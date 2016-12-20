'use strict';
// **************************** USER NAME STORAGE ********************* //
var nameForm = document.getElementById('nameForm');
var storyArray = [];

// **************************** EVENT HANDLERS ********************* //
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

// **************************** EVENT LISTENERS ********************* //
nameForm.addEventListener('submit', setName);

// **************************** EVENT LISTENERS ********************* //


function UserStory(userName) {
  this.name = userName,
  this.avatar = 'null',
  this.pathChosen = [],
  this.thingsDone = []

  storyArray.push(this)
}
