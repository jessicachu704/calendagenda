
$(document).ready(function () {
  updateUsername();
  updateDate();

 
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
  db.collection("users").doc(user.uid)
  .onSnapshot(function (snap) {

    let username =snap.data().name; 
    if(username.indexOf(' ') <= 0 ){
      document.getElementById('userName').innerHTML = username + "!";
    }
    else{
    document.getElementById('userName').innerHTML = username.substring(0,username.indexOf(" ")) + "!";
    }
   });
  });
};

// ---------------------------------------------
// Updates main page to today's date
// ---------------------------------------------

function updateDate(){
  let dateToday = months[currentMonth] + " " + today.getDate();
  document.getElementById('cl_copy').innerHTML = dateToday + " " + currentYear;
}

// ---------------------------------------------
//Create list of duedates for selected course and assessment type.
// @param course course number of user
// @type type assessment type of user
// ---------------------------------------------

function createList(course, type){
    let duedate;
    db.collection("courses").doc(course).collection("assessments").doc(type)
    .onSnapshot(function(snap){
      let percent = snap.data().weight/snap.data().max;
      console.log

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
    });
}
// ---------------------------------------------
//Sorts list of due dates's grade weight in descending order.
// ---------------------------------------------
function sortDueDates(){
  function compare( a, b ) {
    if(a.percent > b.percent){
      return -1;
    }
    else if(a.percent < b.percent){
      return 1;
    }
    else{
      0;
    }
  }
  dueDateList.sort(compare);
}

// ---------------------------------------------
//Function to create task schedule for current week.
// ---------------------------------------------
function createEventList() {
  sortDueDates();
  let event = document.getElementById("event-body");
  event.innerHTML = "";
  let clickDate = document.createElement("div");
  clickDate.innerHTML = "Your schedule this week: "; 
  clickDate.classList.add("events__title");

  let eventList = document.createElement("div");
  eventList.classList.add("events__list");

  for (let i = 0; i < dueDateList.length; i++) {

    for(let j = 0; j < currentWeek.length; j++){
    let due = dueDateList[i].date;
  
    let weekDate = currentWeek[j].date;
    let weekMonth = currentWeek[j].month;
    let weekListItem = months[weekMonth] + " " + weekDate;
    

    if(due == weekListItem){
      let title = dueDateList[i].type;
      let course = dueDateList[i].course;
      let percent = dueDateList[i].percent.toFixed(2) + "%";
    

      let eventItem = document.createElement("div");
      eventItem.classList.add("events__item");
      let eventItemRight = document.createElement("div");
      let eventItemLeft = document.createElement("div");
      eventItemLeft.classList.add("events__item--left");
      eventItemRight.classList.add("events__item--right");
      let eventName = document.createElement("span");
      eventName.classList.add("events__name");
      eventName.innerHTML = course ;

      getCourseColor(eventName, eventItem);
      let eventPercent = document.createElement("span");
      eventPercent.innerHTML =  title;
      eventPercent.classList.add("events__percent");
      let eventDate = document.createElement("span");
      eventDate.classList.add("events__tag2");
      eventDate.innerHTML = "Due: " + dueDateList[i].date;
      let eventTag = document.createElement("span");
      eventTag.classList.add("events__tag1");
      eventTag.innerHTML = "Percentage worth: " + percent;"Due: " + dueDateList[i].date;
      eventItemRight.append(eventTag, eventDate);
      eventItemLeft.append(eventName, eventPercent);
      eventItem.append(eventItemLeft, eventItemRight);
      eventList.appendChild(eventItem);
    
    }
  event.append(clickDate, eventList);
    

}
  }
}


// ---------------------------------------------
// Changes event task color based on course.
// ---------------------------------------------
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