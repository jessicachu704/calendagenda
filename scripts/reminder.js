
      //Retrieve course info from database and place onto HTML
      db.collection("courses").doc("1536").onSnapshot(function (snap) {
          console.log("Current data is...", snap.data());
          document.getElementById('stuff').innerHTML = snap.data().name +" "+  snap.data().room;
        

      });
