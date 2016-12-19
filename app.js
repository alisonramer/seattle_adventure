'use strict';

var nameForm = document.getElementById('nameForm');

function setName(event){

  event.preventDefault();

  var nameInput = document.getElementById('nameInput');
  var userName = event.target.nameInput.value;
  console.log(userName, nameInput);

}

nameForm.addEventListener('submit', setName);
