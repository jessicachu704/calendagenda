//---------------------------------------------------------------------
// Your web app's Firebase configuration;
// Speficies which firebase project your application is connected with.
//---------------------------------------------------------------------

var firebaseConfig = {
  apiKey: "AIzaSyDaE-SIkxEe_20i33sdDVA_Gpfs6STETqo",
  authDomain: "oct31-3f384.firebaseapp.com",
  databaseURL: "https://oct31-3f384.firebaseio.com",
  projectId: "oct31-3f384",
  storageBucket: "oct31-3f384.appspot.com",
  messagingSenderId: "240584166699",
  appId: "1:240584166699:web:584bfa5362305d3f64c96e"

  
};

// Initialize Firebase
// Henceforce, any reference to the database can be made with "db"
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
