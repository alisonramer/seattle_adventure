'use strict';
// ******************************************* storing username for local storage ***************
var nameForm = document.getElementById('nameForm');

function setName(event){

  event.preventDefault();

  var nameInput = document.getElementById('nameInput');
  var userName = event.target.nameInput.value;

  sendToLocalStorage(userName);

  console.log(userName, nameInput);

}
// ***************************************** event listener for username *********************
nameForm.addEventListener('submit', setName);
// ******************************************************************************************

function sendToLocalStorage(userName){
  var stringifiedName = JSON.stringify(userName);
  localStorage.setItem(userName, stringifiedName);

  console.log(stringifiedName);

}
