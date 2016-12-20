// ID'S AND VARIABLES



  var avatarBox = document.getElementById('avatarBox');
  var stringifiedName = localStorage.getItem('currentUser');
  var userName = JSON.parse(stringifiedName);
  // console.log(stringifiedName, userName);

  var stringifiedArray = localStorage.getItem('story');
  var storyArray = JSON.parse(stringifiedArray);
  // console.log(storyArray)


// **************************** FUNCTIONS ********************* //

  function sendToLocalStorage(userKey, something){
    var stringifiedName = JSON.stringify(something);
    // var currentUserKey = JSON.stringify(userKey);
    localStorage.setItem(userKey, stringifiedName);

    // console.log(currentUserKey, stringifiedName);
  }

// **************************** EVENT HANDLERS ********************* //

function setAvatar(event){
  event.preventDefault();

  if(event.target.id === 'avatarBox'){
    return alert('Please pick your favortite animal.');
  }
  console.log(event.target.id);

  storyArray[0].avatar = event.target.id;
  sendToLocalStorage('story', storyArray);


}

// **************************** EVENT LISTENERS ********************* //

avatarBox.addEventListener('click', setAvatar);
