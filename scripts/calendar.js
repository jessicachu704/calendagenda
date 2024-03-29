let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var dueDateList = [];
let dueDateObject = new Object();
let monthAndYear = document.getElementById("monthAndYear");


createCalendar()

function createCalendar(){
  createList("1510", "assignments");
  createList("1510", "midterm");
  createList("1510", "quizzes");
  createList("1510", "lab");
  createList("1510", "final");

  createList("1930", "project");
  createList("1930", "presentations");
  createList("1930", "assignments");

  createList("1536", "quizzes");
  createList("1536", "lab");

  createList("1712", "final");
  createList("1536", "final");
  createList("1113", "final");
  createList("1113", "assignments");
  createList("1712", "assignments");

}


// ---------------------------------------------
//Create list of duedates for selected course and assessment type.
// @param course course number of user
// @type type assessment type of user
// ---------------------------------------------
function createList(course, type) {
  let duedate;

  db.collection("courses").doc(course).collection("assessments").doc(type)
    .onSnapshot(function (snap) {
      let percent = snap.data().weight / snap.data().max;

      for (let i = 0; i < snap.data().duedates.length; i++) {
        if(type == "assignments") type = "Assignment";
        if(type == "final") type = "Final";
        if(type == "quizzes") type = "Quiz";
        if(type == "lab") type = "Lab";
        if(type == "final") type = "Final";
        if(type == "project") type = "Project";
        if(type == "presentations") type = "Presentation";
        duedate = snap.data().duedates[i];
        dueDateObject = {
          course: course,
          type: type,
          percent: percent,
          date: duedate
        };
        dueDateList.push(dueDateObject);
      }
      showCalendar(currentMonth, currentYear);
    
    });
}

// ---------------------------------------------
//Changes calendar month to the next month.
// ---------------------------------------------
function next() {
  currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
  currentMonth = (currentMonth + 1) % 12;
  showCalendar(currentMonth, currentYear);
}

// ---------------------------------------------
//Changes calendar month to the previous month.
// ---------------------------------------------
function previous() {
  currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
  currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
  showCalendar(currentMonth, currentYear);
}
// ---------------------------------------------
//Creates calendar with bubbled due dates.
// @month current month
// @year current year
// ---------------------------------------------
function showCalendar(month, year) {

  let firstDay = (new Date(year, month)).getDay();
  let daysInMonth = 32 - new Date(year, month, 32).getDate();
  let tbl = document.getElementById("calendar-body");
  tbl.innerHTML = "";

  monthAndYear.innerHTML = months[month] + " " + year;
  currentYear.value = year;
  currentMonth.value = month;

  let date = 1;
  for (let i = 0; i < 6; i++) {
    let row = document.createElement("div");
    row.classList.add("calendar-table__row");
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        let divCol = document.createElement("div");
        divCol.classList.add("calendar-table__col");
        let cell = document.createElement("div");
        cell.classList.add("calendar-table__item");
        cell.innerHTML = "";
        divCol.append(cell);
        row.appendChild(divCol);
      } else if (date > daysInMonth) {
        break;
      } else {
        let divCol = document.createElement("div");
        let cell = document.createElement("div");
        cell.innerHTML = date;
        divCol.classList.add("calendar-table__col");
        divCol.addEventListener("click", createEventList);
        cell.classList.add("calendar-table__item");

        for (let i = 0; i < dueDateList.length; i++) {
          if (dueDateList[i].date == (months[month] + " " + date)) {

            cell.classList.add("calendar-table__event");
          }
        }
        //today circle
        if (date === today.getDate() && year === today.getFullYear() &&
          month === today.getMonth()) {
          cell.classList.add("calendar-table__today");
        }
        divCol.append(cell);
        row.appendChild(divCol);
        date++;
      }
    }
    tbl.appendChild(row);
  }
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
function createEventList(e) {
  sortDueDates();
  let target = e.target || e.insertAdjacentElement;
  let event = document.getElementById("event-body");
  event.innerHTML = "";

  let clickDate = document.createElement("div");
  clickDate.innerHTML = months[currentMonth] + " " + target.innerHTML;
  clickDate.classList.add("events__title");

  let eventList = document.createElement("div");
  eventList.classList.add("events__list");

  for (let i = 0; i < dueDateList.length; i++) {
    if (dueDateList[i].date == (months[currentMonth] + " " + target.innerHTML)) {
      let title = dueDateList[i].type;
      let course = dueDateList[i].course;
      let percent = dueDateList[i].percent.toFixed(2)  + "%";
      let time = "8PM";

 
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
  }
  event.append(clickDate, eventList);
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