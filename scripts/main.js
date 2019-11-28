let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var dueDateList  = [];
let dueDateObject = new Object();
let monthAndYear = document.getElementById("monthAndYear");



// ---------------------------------------------
// If the currently logged in user is authenticated,
// then signout this person "user".
// ---------------------------------------------
function logoutUser() {
  firebase.auth().onAuthStateChanged(function (user) {
    var promise = firebase.auth().signOut();
    promise.then(function () {
      alert("logged out");
    });
  });
}
db.collection("users").doc(user.uid).collection("grades").doc(course)
console.log(user.uid);


function updateDate(){
    console.log("DATE, " + months[currentMonth] + " " + today.getDate() + " " + currentYear);
    document.getElementById('cl_copy').innerHTML= "HELO";
  //  console.log("date, " + d);
   // document.getElementById("cl_copy").innerHTML = "hi";

   // date.innerHTML = ""+ months[currentMonth] + " " + today.getDate() + " " + currentYear;
}
updateDate();
      //Retrieve course info from database and place onto HTML
      db.collection("courses").doc("1536").onSnapshot(function (snap) {
        // console.log("Current data is...", snap.data());
          document.getElementById('stuff').innerHTML = snap.data().name +" "+  snap.data().room;
      
      });
/*
createList("1510", "assignments");
createList("1510", "midterm");
createList("1712", "final");
createList("1536", "final");
createList("1113", "final");
createList("1510", "final");
createList("1712", "assignments");

//Create list of duedates for selected course and assessment type
function createList(course, type){
    let duedate;

    db.collection("courses").doc(course).collection("assessments").doc(type)
    .onSnapshot(function(snap){
      let percent = snap.data().weight/snap.data().max;

      for(let i = 0; i < snap.data().duedates.length; i++ ){
        duedate =  snap.data().duedates[i];
        dueDateObject = {course: course, type: type, percent: percent, date: duedate};
        dueDateList.push(dueDateObject);
      }

    //  console.log("LIST:" + dueDateList);
    });
}*/