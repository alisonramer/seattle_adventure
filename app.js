'use strict';
// ******************************************* storing username for local storage ***************
var nameForm = document.getElementById('nameForm');
var storyArray = [];


function setName(event){

  event.preventDefault();

  var nameInput = document.getElementById('nameInput');
  var userName = event.target.nameInput.value;

  new UserStory(userName);
  sendToLocalStorage(storyArray);

  console.log(userName, nameInput);

}
// ***************************************** event listener for username *********************
nameForm.addEventListener('submit', setName);
// ******************************************************************************************

function sendToLocalStorage(storyArray){
  var stringifiedName = JSON.stringify(storyArray);
  localStorage.setItem(storyArray[0].name, stringifiedName);

  console.log(stringifiedName);
}

function UserStory(userName) {
  this.name = userName,

  storyArray.push(this);
}
