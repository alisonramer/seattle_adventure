// ID'S AND VARIABLES



var avatarBox = document.getElementById('avatarBox');
var stringifiedName = localStorage.getItem('currentUser');
var userName = JSON.parse(stringifiedName);
// console.log(stringifiedName, userName);

var stringifiedArray = localStorage.getItem('story');
var storyArray = JSON.parse(stringifiedArray);
// console.log(storyArray)
document.getElementById('headerTextElement').textContent = 'Who has escaped from the zoo?';


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
  for (var i = 0; i < storyArray.length; i++) {
    if(storyArray[i].name === userName){
      storyArray[i].avatar = event.target.id;
    }
  }

  sendToLocalStorage('story', storyArray);
  window.location.href = 'chooseDestination.html'
}

// **************************** EVENT LISTENERS ********************* //

avatarBox.addEventListener('click', setAvatar);
