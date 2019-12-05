$(document).ready(function () {
  //Signs out user when sign out button is clicked.
  $('#signOutButton').click(function (x) {
      console.log("PRESSED SIGNOUT BUTTON");
      signout();
     location.href = "./loginpage.html";
  });

  
// ---------------------------------------------
// If the currently logged in user is authenticated,
// then signout this person "user".
// ---------------------------------------------
function signout() {
  firebase.auth().onAuthStateChanged(function (user) {
      firebase.auth().signOut().then(function () {
          console.log("sign out");
      });
  });
}

//Sends user to login page if not logged in.
  firebase.auth().onAuthStateChanged(function(user){
    if(user == null){
   
      console.log("u cant see user is null :(");
        location.href = "./loginpage.html";
    }
   });
});