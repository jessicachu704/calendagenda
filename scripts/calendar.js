let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);
retrieveTest();
//getDueDate()

function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

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

                cell.innerHTML= "";
                

                divCol.append(cell);
                row.appendChild(divCol);
            }
            else if (date > daysInMonth) {
                break;
                
            }

            else {


                let divCol = document.createElement("div");

                let cell = document.createElement("div");

                cell.innerHTML =date;
                divCol.classList.add("calendar-table__col");
                divCol.addEventListener("click", numberPopClicked);
                cell.classList.add("calendar-table__item");

                //Column of due dates
                if(j == 5){
                    cell.classList.add("calendar-table__event");
                }
                //single due date
                if(date == 6){
                   cell.classList.add("calendar-table__event");
                }
                //occasional due date
                db.collection("courses").doc("1510").collection("assessments").doc("assignments").onSnapshot(function(snap){
                  duedate =  snap.data().duedates;
                  console.log("hi", duedate[2]);
 
                  let d = (date);
                  console.log("hi2 ", d);

                  if((d) == duedate[2]){
                    console.log("hi");
                    cell.classList.add("calendar-table__event");
                  }
                });


                //today circle
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    //cell.classList.add("calendar-table__today");
                } 


                divCol.append(cell);
                row.appendChild(divCol);
                date++;
            }
        }
        tbl.appendChild(row); 
    }

}



    function numberPopClicked(e){
        let target = e.target || e.insertAdjacentElement;
        console.log("HI " + months[currentMonth] +" "+ target.innerHTML + " I WAS CLICKED");
        let event = document.getElementById("event-body"); 
        event.innerHTML = "";

        let clickDate = document.createElement("div");
        clickDate.innerHTML =  months[currentMonth] +" "+ target.innerHTML ;
        clickDate.classList.add("events__title");

        let eventList = document.createElement("div");
        eventList.classList.add("events__list");


        //Task item 
        for(var i = 0; i <4 ; i++){
          let eventItem= document.createElement("div");
          eventItem.classList.add("events__item");
          let eventItemLeft = document.createElement("div");
            eventItemLeft.classList.add("events__item--left");
          let eventName = document.createElement("span");
          eventName.classList.add("events__name");
          eventName.innerHTML ="Java Assignment";
          let eventPercent = document.createElement("span");
          eventPercent.innerHTML ="5%";
          eventPercent.classList.add("events__percent");
          let eventDate = document.createElement("span");
          eventDate.classList.add("events__date");
          eventDate.innerHTML =  months[currentMonth] +" "+ target.innerHTML ;
          let eventTag = document.createElement("span");
          eventTag.classList.add("events__tag");
          eventTag.innerHTML ="9 PM";
          eventItemLeft.append(eventName, eventPercent, eventDate);
          eventItem.append(eventItemLeft, eventTag);
          eventList.appendChild(eventItem);
        }

        event.append(clickDate, eventList);
    }



    function retrieveTest(){
      var duedate = new Array();
      db.collection("courses").doc("1510").collection("assessments").doc("assignments").onSnapshot(function(snap){
        duedate =  snap.data().duedates;
      });
    return duedate;
    }
    var hi = retrieveTest();

//Retrieve course info from database and place onto HTML
db.collection("courses").doc("1536").onSnapshot(function (snap) {
  //  console.log("Current data is...", snap.data());
    document.getElementById('stuff').innerHTML = snap.data().name ;
  

});

