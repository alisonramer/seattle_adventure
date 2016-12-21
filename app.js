'use strict';
// **************************** USER NAME STORAGE ********************* //
var nameForm = document.getElementById('nameForm');
var storyArray = [];

if(localStorage.getItem('story')){
  var stringifiedArray = localStorage.getItem('story');
  storyArray = JSON.parse(stringifiedArray);
}

// **************************** EVENT HANDLERS ********************* //
function setName(event){

  event.preventDefault();

  var nameInput = document.getElementById('nameInput');
  var userName = event.target.nameInput.value;
  var currentUser = userName;

  for (var i = 0; i < storyArray.length; i++) {
    if(storyArray[i].name.includes(userName) === true) {

      storyArray[i].placesGone = [];
      sendToLocalStorage('story', storyArray);
      sendToLocalStorage('currentUser', currentUser);
      alert('Welcome Back '+userName+'!');
      window.location.href = 'avatar.html';
      return;
    }
  }

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
  this.placesGone = [],

  storyArray.push(this)
}

function sendToLocalStorage(userKey, something){
  var stringifiedName = JSON.stringify(something);
  // var currentUserKey = JSON.stringify(userKey);
  localStorage.setItem(userKey, stringifiedName);

  // console.log(currentUserKey, stringifiedName);
}
