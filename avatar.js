// ID'S AND VARIABLES

var avatarBox = document.getElementById('avatarBox');
var stringifiedName = localStorage.getItem('currentUser');
var userName = JSON.parse(stringifiedName);
console.log(stringifiedName, userName);



// EVENT HANDLERS

function setAvatar(event){
  event.preventDefault();

  if(event.target.id === 'avatarBox'){
    return alert('Please pick your favortite animal.');
  }


  console.log(event.target.id);
}

// EVENT listeners

avatarBox.addEventListener('click', setAvatar);
