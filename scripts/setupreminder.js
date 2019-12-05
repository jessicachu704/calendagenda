let reminderTitle = document.getElementById("title").innerHTML;
let reminderDescription = document.getElementById("box").innerHTML;
let reminderDate = document.getElementById("date").innerHTML;
let reminderTime = document.getElementById("time").innerHTML;
let reminderLocation = document.getElementById("location").innerHTML;
console.log("Reminder" + reminderTitle + "" + reminderDescription + "" + reminderDate + "" + reminderTime);
firebase.auth().onAuthStateChanged(function (user) {
  
        console.log(user.uid);
        db.collection("users").doc(user.uid).collection("reminder")
        .add({
            name: reminderTitle,
            description: reminderDescription,
            date: reminderTime,
            time: reminderTime,
            location: reminderLocation

        })
      });
      