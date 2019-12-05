function info1536() {
  db.collection("courses").doc("1536").onSnapshot(function (snap){
    console.log("Current data is..."+ snap.data());
    document.getElementById('1536ins').innerHTML = snap.data().instructor
    document.getElementById('1536email').innerHTML = snap.data().email
    document.getElementById('1536room').innerHTML = snap.data().room
  });
}
function info1510() {
  db.collection("courses").doc("1510").onSnapshot(function (snap){
    console.log("Current data is..."+ snap.data());
    document.getElementById('1510ins').innerHTML = snap.data().instructor
    document.getElementById('1510email').innerHTML = snap.data().email
    document.getElementById('1510room').innerHTML = snap.data().room
  });
}
function info1712() {
  db.collection("courses").doc("1712").onSnapshot(function (snap){
    console.log("Current data is..."+ snap.data());
    document.getElementById('1712ins').innerHTML = snap.data().instructor
    document.getElementById('1712email').innerHTML = snap.data().email
    document.getElementById('1712room').innerHTML = snap.data().room
  });
}
function info1930() {
  db.collection("courses").doc("1930").onSnapshot(function (snap){
    console.log("Current data is..."+ snap.data());
    document.getElementById('1930ins').innerHTML = snap.data().instructor
    document.getElementById('1930email').innerHTML = snap.data().email
    document.getElementById('1930room').innerHTML = snap.data().room
  });
}function info1113() {
  db.collection("courses").doc("1113").onSnapshot(function (snap){
    console.log("Current data is..."+ snap.data());
    document.getElementById('1113ins').innerHTML = snap.data().instructor
    document.getElementById('1113email').innerHTML = snap.data().email
    document.getElementById('1113room').innerHTML = snap.data().room
  });
}function info1116() {
  db.collection("courses").doc("1116").onSnapshot(function (snap){
    console.log("Current data is..."+ snap.data());
    document.getElementById('1116ins').innerHTML = snap.data().instructor
    document.getElementById('1116email').innerHTML = snap.data().email
    document.getElementById('1116room').innerHTML = snap.data().room
  });
}
info1536();
info1116();
info1113();
info1930();
info1712();
info1510();