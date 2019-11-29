let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var dueDateList  = [];
let dueDateObject = new Object();
let monthAndYear = document.getElementById("monthAndYear");


updateUsername();
updateDate();

createList("1510", "assignments");
createList("1510", "midterm");
createList("1712", "final");
createList("1536", "final");
createList("1113", "final");
createList("1510", "final");
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
        duedate =  snap.data().duedates[i];
        dueDateObject = {course: course, type: type, percent: percent, date: duedate};
        dueDateList.push(dueDateObject);
        
      }
      createEventList();
      console.log("LIST " + dueDateList);
    });
}


function createEventList() {
  let event = document.getElementById("event-body");
  event.innerHTML = "";

  let clickDate = document.createElement("div");
  clickDate.innerHTML = months[currentMonth] + " " + today.getDate();
  clickDate.classList.add("events__title");

  let eventList = document.createElement("div");
  eventList.classList.add("events__list");

  for (let i = 0; i < 10; i++) {
    let due = dueDateList[i].date;
    let current = months[currentMonth] + " " + today.getDate()
 //   if (due == current || )
//    ||) {
      let title = dueDateList[i].type;
      let course = dueDateList[i].course;
      let percent = dueDateList[i].percent + "%";
      let time = "8PM";

      let eventItem = document.createElement("div");
      eventItem.classList.add("events__item");
      let eventItemLeft = document.createElement("div");
      eventItemLeft.classList.add("events__item--left");
      let eventName = document.createElement("span");
      eventName.classList.add("events__name");
      eventName.innerHTML = course + " " + title;


      /**
       * 
       *                             <span class="events__title">This weeks schedule:</span>
                            <ul class="events__list">
                              <li class="events__item">
                                <div class="events__item--left">
                                  <span class="events__name">Java Assignment 1</span>
                                  <span class="events__percent">5%</span>
                                  <span class="events__date">Oct 5</span>
                                </div>
                                <span class="events__tag1">12 PM</span>
                                <span class="events__tag2">COMP 1510 </span>

                              </li>
                    
                            </ul>
       */
      getCourseColor(eventName, eventItem);
      let eventPercent = document.createElement("span");
      eventPercent.innerHTML = percent;
      eventPercent.classList.add("events__percent");
      let eventDate = document.createElement("span");
      eventDate.classList.add("events__date");
      eventDate.innerHTML = dueDateList[i].date;
      let eventTag = document.createElement("span");
      eventTag.classList.add("events__tag1");
      eventTag.innerHTML = time;
      eventItemLeft.append(eventName, eventPercent, eventDate);
      eventItem.append(eventItemLeft, eventTag);
      eventList.appendChild(eventItem);
    
  }
  event.append(clickDate, eventList);
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