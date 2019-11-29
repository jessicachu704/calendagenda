$(document).ready(function () {

  updateUsername();
  updateDate();

  $('#signOutButton').click(function (x) {
      console.log("PRESSED SIGNOUT BUTTON");
      signout();
     location.href = "./loginpage.html";
  });
});

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let currentWeek = [];
var dueDateList  = [];
let dueDateObject = new Object();
let monthAndYear = document.getElementById("monthAndYear");


console.log("MONTH " + today.getMonth() + " TODAY: ", today.getDate() );
for(let i =0; i < 7 ; i++){
  let todayDate = today.getDate();
  let todayMonth = today.getMonth();
  if((todayDate + i) > 30 ){
  todayDate = 1 -3   ;
  if(todayMonth == 11){
    todayMonth = 0;
  }else{
  todayMonth += 1;
  }
}
todayDate += (i) ;

  let dateObj =  {month: todayMonth,  date: (todayDate) };
  currentWeek.push(dateObj);

}
//console.log(currentWeek );

createList("1510", "assignments");
createList("1510", "midterm");
createList("1510", "quizzes");
createList("1510", "lab");
createList("1510", "final");
createList("1536", "quizzes");
createList("1536", "lab");
createList("1712", "final");
createList("1536", "final");
createList("1113", "final");
createList("1113", "assignments");
createList("1712", "assignments");
// ---------------------------------------------
// Updates main page with user's name.
// ---------------------------------------------
function updateUsername(){
  firebase.auth().onAuthStateChanged(function (user) {
    console.log(user.uid);
  db.collection("users").doc(user.uid).onSnapshot(function (snap) {
    console.log("NAME " + snap.data().name);
    let username =snap.data().name; 
    document.getElementById('userName').innerHTML = username .substring(0,username.indexOf(" ")) + "!";
   });
  });
};
//Sigh out
function signout() {
  firebase.auth().onAuthStateChanged(function (user) {
      firebase.auth().signOut().then(function () {
          console.log("sign out");
      });
  });
}
// ---------------------------------------------
// Updates main page to today's date
// ---------------------------------------------

function updateDate(){
  let dateToday = months[currentMonth] + " " + today.getDate();
  document.getElementById('cl_copy').innerHTML = dateToday + " " + currentYear;
}

//Create list of duedates for selected course and assessment type
function createList(course, type){
    let duedate;
    db.collection("courses").doc(course).collection("assessments").doc(type)
    .onSnapshot(function(snap){
      let percent = snap.data().weight/snap.data().max;

      for(let i = 0; i < snap.data().duedates.length; i++ ){
        if(type == "assignments") type = "Assignment";
        if(type == "final") type = "Final";
        if(type == "quizzes") type = "Quiz";
        if(type == "lab") type = "Lab";
        if(type == "final") type = "Final";
        duedate =  snap.data().duedates[i];
        dueDateObject = {course: course, type: type, percent: percent, date: duedate};
        dueDateList.push(dueDateObject);
        
      }
      createEventList();
   //   console.log("LIST " + dueDateList);
    });
}


function createEventList() {
  let event = document.getElementById("event-body");
  event.innerHTML = "";

  let clickDate = document.createElement("div");
  clickDate.innerHTML = "Your schedule this week: "; 
  clickDate.classList.add("events__title");

  let eventList = document.createElement("div");
  eventList.classList.add("events__list");
 // let i = 3;
 // console.log("DUE DATE OBJECT " ,dueDateList);
  for (let i = 0; i < dueDateList.length; i++) {
 // let j = 7;
    for(let j = 0; j < currentWeek.length; j++){
    let due = dueDateList[i].date;
   // let current = months[currentMonth] + " " + today.getDate()
    let weekDate = currentWeek[j].date;
    let weekMonth = currentWeek[j].month;
    let weekListItem = months[weekMonth] + " " + weekDate;
    

    if(due == weekListItem){
    //  console.log("due date list: ", due + " vs week list: ",  weekListItem  );
    //  console.log("they match!!!!!!!!!!!!");
      let title = dueDateList[i].type;
      let course = dueDateList[i].course;
      let percent = dueDateList[i].percent.toFixed(2) + "%";
      let time = "8PM";

      let eventItem = document.createElement("div");
      eventItem.classList.add("events__item");
      let eventItemLeft = document.createElement("div");
      eventItemLeft.classList.add("events__item--left");
      let eventName = document.createElement("span");
      eventName.classList.add("events__name");
      eventName.innerHTML = course + " " + title;

      getCourseColor(eventName, eventItem);
      let eventPercent = document.createElement("span");
      //eventPercent.innerHTML = percent;
      eventPercent.classList.add("events__percent");
      let eventDate = document.createElement("span");
      eventDate.classList.add("events__tag2");
      eventDate.innerHTML = percent;
      let eventTag = document.createElement("span");
      eventTag.classList.add("events__tag1");
      eventTag.innerHTML = dueDateList[i].date;
      eventItemLeft.append(eventName, eventPercent, eventDate);
      eventItem.append(eventItemLeft, eventTag);
      eventList.appendChild(eventItem);
    
    }
  event.append(clickDate, eventList);
    

}
  }
}

function getCourseColor(eventName, eventItem) {
  let num = eventName.innerHTML.substring(0, 4);
  switch (num) {
    case "1712":
      return eventItem.setAttribute("style", "border-left: 8px solid red;");
    case "1510":
      return eventItem.setAttribute("style", "border-left: 8px solid orange;");
    case "1113":
      return eventItem.setAttribute("style", "border-left: 8px solid brown;");
    case "1536":
      return eventItem.setAttribute("style", "border-left: 8px solid yellow;");
    case "1000":
      return eventItem.setAttribute("style", "border-left: 8px solid black;");
    case "1930":
      return eventItem.setAttribute("style", "border-left: 8px solid pink;");
  }

}