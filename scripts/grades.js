
setComp1510QuizAddListener();
getComp1510QuizAverage("1510", "quizzes");
showComp1510QuizMarks();

//-----------------------------------------------
// Creating an event when the user submits their
// COMP 1510 quiz and puts data into firebase.
//-----------------------------------------------
function setComp1510QuizAddListener() {
    document.getElementById("submit").addEventListener("click", function (e) {

        //Variables for course and the criteria
        let course = "1510";
        let type = "quizzes";
        let quiznum = document.getElementById("experience").value;
        let grade = document.getElementById("message-text").value;
        console.log("COMP 1510 " + quiznum + " " + grade);

        firebase.auth().onAuthStateChanged(function (user) {
            console.log(user.uid);
            db.collection("users").doc(user.uid).collection("grades").doc(course)
                .collection(type)
                .add({
                    name: quiznum,
                    mark: grade
                })
        });


    });
}

//--------------------------------------------
// Displays the comp 1510 quiz mark by 
// retriving from the firebase we have stored
//--------------------------------------------
function showComp1510QuizMarks() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).collection("grades").doc("1510").collection("quizzes")
            .orderBy("name")
            .onSnapshot(function (snap) {

                var counter = 1;
                snap.forEach(function (doc) {
                    // Getting the data and displaying it through the database
                    var mark = doc.data().mark;
                    document.getElementById("comp1510Quiz" + counter).innerHTML = mark;
                    counter++;
                })

            })


    })
}

//----------------------------------------------
// Getting the total data of the comp 1510
// quiz and calculating the average for display
//----------------------------------------------
function getComp1510QuizAverage(course, type) {
    let sum = 0;
    let totalQuiz = 0.0;
    firebase.auth().onAuthStateChanged(function (user) {
        var dbRef = db.collection('users').doc(user.uid).collection("grades").doc(course)
            .collection(type);
        
        
        dbRef.onSnapshot(function (snap) {
            //Checks each document in the collection
            snap.forEach(function (doc) {
                var mark = Number(doc.data().mark);
                console.log(doc.data().name + " ", mark);
                sum += mark;

                totalQuiz++

            });

            console.log("sum of marks ", sum);
            console.log("total of quizzes", totalQuiz);
            let average = sum / totalQuiz;
            console.log("AVERAGE ", average);
            document.getElementById("comp1510AverageQuizzes").innerHTML = average.toFixed(2) +
                "/5";
            sum = 0;
            totalQuiz = 0;
        });

    });
}

setComp1510LabAddListener();
getComp1510LabAverage("1510", "labs");
showComp1510LabMarks();

//-----------------------------------------------
// Creating an event when the user submits their
// comp 1510 lab and puts data into firebase.
//-----------------------------------------------
function setComp1510LabAddListener() {
    document.getElementById("submit1").addEventListener("click", function (e) {

        //Variables for course and criteria
        let course = "1510";
        let type = "labs";
        let labnum = document.getElementById("experience1").value;
        let grade = document.getElementById("message-text1").value;
        console.log("COMP 1510 " + labnum + " " + grade);

        firebase.auth().onAuthStateChanged(function (user) {
            console.log(user.uid);
            db.collection("users").doc(user.uid).collection("grades").doc(course)
                .collection(type)
                .add({
                    name: labnum,
                    mark: grade
                })
        });


    });
}


//--------------------------------------------
// Displays the comp 1510 lab mark by 
// retriving from the firebase we have stored
//--------------------------------------------
function showComp1510LabMarks() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).collection("grades").doc("1510").collection("labs")
            .orderBy("name")
            .onSnapshot(function (snap) {

                var counter = 1;
                snap.forEach(function (doc) {
                    // Getting the data and displaying it through the database
                    var mark = doc.data().mark;
                    document.getElementById("comp1510Lab" + counter).innerHTML = mark;
                    counter++;
                })

            })


    })
}

//----------------------------------------------
// Getting the total data of the comp 1510
// lab and calculating the average for display
//----------------------------------------------
function getComp1510LabAverage(course, type) {
    firebase.auth().onAuthStateChanged(function (user) {
        var dbRef = db.collection('users').doc(user.uid).collection("grades").doc(course)
            .collection(type);
        let sum = 0;
        let totalLab = 0.0;
        dbRef.onSnapshot(function (snap) {
            //Checks each document in the collection
            snap.forEach(function (doc) {
                var mark = Number(doc.data().mark);
                console.log(doc.data().name + " ", mark);
                sum += mark;

                totalLab++

            });

            console.log("sum of marks ", sum);
            let average = sum / totalLab;
            console.log("AVERAGE ", average);
            document.getElementById("comp1510AverageLabs").innerHTML = average.toFixed(2) +
                "/5";

            sum = 0;
            totalLab = 0;

        });

    });
}


setComp1510AssignmentAddListener();
getComp1510AssignmentAverage("1510", "assignments");
showComp1510AssignmentMarks();

//---------------------------------------------------
// Creating an event when the user submits their
// comp 1510 assignment and puts data into firebase.
//---------------------------------------------------
function setComp1510AssignmentAddListener() {
    document.getElementById("submit2").addEventListener("click", function (e) {

        //Variables for different types of course and assessments
        let course = "1510";
        let type = "assignments";
        let assignmentnum = document.getElementById("experience2").value;
        let grade = document.getElementById("message-text2").value;
        console.log("COMP 1510 " + assignmentnum + " " + grade);

        firebase.auth().onAuthStateChanged(function (user) {
            console.log(user.uid);
            db.collection("users").doc(user.uid).collection("grades").doc(course)
                .collection(type)
                .add({
                    name: assignmentnum,
                    mark: grade
                })
        });


    });
}

//--------------------------------------------
// Displays the comp 1510 assignment mark by 
// retriving from the firebase we have stored
//--------------------------------------------
function showComp1510AssignmentMarks() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).collection("grades").doc("1510").collection("assignments")
            .orderBy("name")
            .onSnapshot(function (snap) {

                var counter = 1;
                snap.forEach(function (doc) {
                    // Getting the data and displaying it through the database
                    var mark = doc.data().mark;
                    document.getElementById("comp1510Assignment" + counter).innerHTML =
                        mark;
                    counter++;
                })

            })


    })
}

//----------------------------------------------
// Getting the total data of the comp 1510
// assignment and calculating the average for display
//----------------------------------------------
function getComp1510AssignmentAverage(course, type) {
    firebase.auth().onAuthStateChanged(function (user) {
        var dbRef = db.collection('users').doc(user.uid).collection("grades").doc(course)
            .collection(type);
        let sum = 0;
        let totalAssignments = 0.0;
        dbRef.onSnapshot(function (snap) {
            //Checks each document in the collection
            snap.forEach(function (doc) {
                var mark = Number(doc.data().mark);
                console.log(doc.data().name + " ", mark);
                sum += mark;

                totalAssignments++

            });

            console.log("sum of marks ", sum);
            let average = sum / totalAssignments;
            console.log("AVERAGE ", average);
            document.getElementById("comp1510AverageAssignments").innerHTML = average.toFixed(
                2) + "/5";

            sum = 0;
            totalAssignments = 0;

        });

    });
}


setComp1510MidtermAddListener();
showComp1510MidtermMarks();

//---------------------------------------------------
// Creating an event when the user submits their
// comp 1510 midterm and puts data into firebase.
//---------------------------------------------------
function setComp1510MidtermAddListener() {
    document.getElementById("submit3").addEventListener("click", function (e) {
        //Variables for different types of course and assessments
        let course = "1510";
        let type = "midterm";
        let midtermnum = document.getElementById("experience3").value;
        let grade = document.getElementById("message-text3").value;
        console.log("COMP 1510 " + midtermnum + " " + grade);

        firebase.auth().onAuthStateChanged(function (user) {
            console.log(user.uid);
            db.collection("users").doc(user.uid).collection("grades").doc(course)
                .collection(type)
                .add({
                    name: midtermnum,
                    mark: grade
                })
        });


    });
}

//--------------------------------------------
// Displays the comp 1510 midterm mark by 
// retriving from the firebase we have stored
//--------------------------------------------
function showComp1510MidtermMarks() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).collection("grades").doc("1510").collection("midterm")
            .orderBy("name")
            .onSnapshot(function (snap) {

                snap.forEach(function (doc) {
                    // Getting the data and displaying it through the database
                    var mark = doc.data().mark;
                    document.getElementById("comp1510Midterm").innerHTML =
                        mark;

                })

            })


    })
}


setComp1510FinalAddListener();
showComp1510FinalMarks();

//---------------------------------------------------
// Creating an event when the user submits their
// comp 1510 final and puts data into firebase.
//---------------------------------------------------
function setComp1510FinalAddListener() {
    document.getElementById("submit4").addEventListener("click", function (e) {
        //Variables for different types of course and assessments
        let course = "1510";
        let type = "final";
        let finalnum = document.getElementById("experience4").value;
        let grade = document.getElementById("message-text4").value;
        console.log("COMP 1510 " + finalnum + " " + grade);

        firebase.auth().onAuthStateChanged(function (user) {
            console.log(user.uid);
            db.collection("users").doc(user.uid).collection("grades").doc(course)
                .collection(type)
                .add({
                    name: finalnum,
                    mark: grade
                })
        });


    });
}


//--------------------------------------------
// Displays the comp 1510 final mark by 
// retriving from the firebase we have stored
//--------------------------------------------
function showComp1510FinalMarks() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).collection("grades").doc("1510").collection("final")
            .orderBy("name")
            .onSnapshot(function (snap) {

                snap.forEach(function (doc) {
                    // Getting the data and displaying it through the database
                    var mark = doc.data().mark;
                    document.getElementById("comp1510Final").innerHTML =
                        mark;

                })

            })


    })
}


setComp1712LabAddListener();
getComp1712LabAverage("1712", "labs");
showComp1712LabMarks();


//-----------------------------------------------
// Creating an event when the user submits their
// comp 1712 lab and puts data into firebase.
//-----------------------------------------------
function setComp1712LabAddListener() {
    document.getElementById("submit5").addEventListener("click", function (e) {
        //Variables for different types of course and assessments
        let course = "1712";
        let type = "labs";
        let labnum = document.getElementById("experience5").value;
        let grade = document.getElementById("message-text5").value;
        console.log("COMP 1712 " + labnum + " " + grade);

        firebase.auth().onAuthStateChanged(function (user) {
            console.log(user.uid);
            db.collection("users").doc(user.uid).collection("grades").doc(course)
                .collection(type)
                .add({
                    name: labnum,
                    mark: grade
                })
        });


    });
}

//--------------------------------------------
// Displays the comp 1712 lab mark by 
// retriving from the firebase we have stored
//--------------------------------------------
function showComp1712LabMarks() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).collection("grades").doc("1712").collection("labs")
            .orderBy("name")
            .onSnapshot(function (snap) {

                var counter = 1;
                snap.forEach(function (doc) {
                    // Getting the data and displaying it through the database
                    var mark = doc.data().mark;
                    document.getElementById("comp1712Lab" + counter).innerHTML = mark;
                    counter++;
                })

            })


    })
}


//----------------------------------------------
// Getting the total data of the comp 1712
// lab and calculating the average for display
//----------------------------------------------
function getComp1712LabAverage(course, type) {
    firebase.auth().onAuthStateChanged(function (user) {
        var dbRef = db.collection('users').doc(user.uid).collection("grades").doc(course)
            .collection(type);
        let sum = 0;
        let totalLab = 0.0;
        dbRef.onSnapshot(function (snap) {
            //Checks each document in the collection(Lab)
            snap.forEach(function (doc) {
                var mark = Number(doc.data().mark);
                console.log(doc.data().name + " ", mark);
                sum += mark;

                console.log("sum of marks", sum);

                totalLab++

            });

            console.log("sum of marks ", sum);
            let average = sum / totalLab;
            console.log("AVERAGE ", average);
            document.getElementById("comp1712AverageLabs").innerHTML = average.toFixed(2) +
                "/10";
            
            sum = 0;
            totalLab = 0;

        });

    });
}

//submit button does this stuff: 
setComp1712AssignmentAddListener();
getComp1712AssignmentAverage("1712", "assignments");

//Adds assignment and its grade into the database 
//DOESNT UPDATE grade / duplicate assignment
function setComp1712AssignmentAddListener() {
    document.getElementById("submit6").addEventListener("click", function (e) {
        //Variables for different types of course and assessments
        let course = "1712";
        let type = "assignments";
        let assignmentnum = document.getElementById("experience6").value;
        let grade = document.getElementById("message-text6").value;
        console.log("COMP 1712 " + assignmentnum + " " + grade);

        firebase.auth().onAuthStateChanged(function (user) {
            console.log(user.uid);
            db.collection("users").doc(user.uid).collection("grades").doc(course)
                .collection(type)
                .add({
                    name: assignmentnum,
                    mark: grade
                })
        });


    });
}


showComp1712AssignmentMarks();

function showComp1712AssignmentMarks() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).collection("grades").doc("1712").collection("assignments")
            .orderBy("name")
            .onSnapshot(function (snap) {

                var counter = 1;
                snap.forEach(function (doc) {
                    // Getting the data and displaying it through the database
                    var mark = doc.data().mark;
                    document.getElementById("comp1712Assignment" + counter).innerHTML =
                        mark;
                    counter++;
                })

            })


    })
}

function getComp1712AssignmentAverage(course, type) {
    firebase.auth().onAuthStateChanged(function (user) {
        var dbRef = db.collection('users').doc(user.uid).collection("grades").doc(course)
            .collection(type);
        let sum = 0;
        let totalAssignments = 0.0;
        dbRef.onSnapshot(function (snap) {
            //Checks each document in the collection
            snap.forEach(function (doc) {
                var mark = Number(doc.data().mark);
                console.log(doc.data().name + " ", mark);
                sum += mark;

                totalAssignments++

            });

            console.log("sum of marks ", sum);
            let average = sum / totalAssignments;
            console.log("AVERAGE ", average);
            document.getElementById("comp1712AverageAssignments").innerHTML = average.toFixed(
                    2) +
                "/10";
            
            sum = 0;
            totalAssignments = 0;

        });

    });
}

//submit button does this stuff: 
setComp1712MidtermAddListener();
showComp1712MidtermMarks();

//Adds midterm and its grade into the database 
function setComp1712MidtermAddListener() {
    document.getElementById("submit7").addEventListener("click", function (e) {
        //Variables for different types of course and assessments
        let course = "1712";
        let type = "midterm";
        let midtermnum = document.getElementById("experience7").value;
        let grade = document.getElementById("message-text7").value;
        console.log("COMP 1712 " + midtermnum + " " + grade);

        firebase.auth().onAuthStateChanged(function (user) {
            console.log(user.uid);
            db.collection("users").doc(user.uid).collection("grades").doc(course)
                .collection(type)
                .add({
                    name: midtermnum,
                    mark: grade
                })
        });


    });
}




function showComp1712MidtermMarks() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).collection("grades").doc("1712").collection("midterm")
            .orderBy("name")
            .onSnapshot(function (snap) {

                snap.forEach(function (doc) {
                    // Getting the data and displaying it through the database
                    var mark = doc.data().mark;
                    document.getElementById("comp1712Midterm").innerHTML =
                        mark;

                })

            })


    })
}

//submit button does this stuff: 
setComp1712FinalAddListener();
showComp1712FinalMarks();

//Adds final and its grade into the database 
function setComp1712FinalAddListener() {
    document.getElementById("submit8").addEventListener("click", function (e) {
        //Variables for different types of course and assessments
        let course = "1712";
        let type = "final";
        let finalnum = document.getElementById("experience8").value;
        let grade = document.getElementById("message-text8").value;
        console.log("COMP 1712 " + finalnum + " " + grade);

        firebase.auth().onAuthStateChanged(function (user) {
            console.log(user.uid);
            db.collection("users").doc(user.uid).collection("grades").doc(course)
                .collection(type)
                .add({
                    name: finalnum,
                    mark: grade
                })
        });


    });
}




function showComp1712FinalMarks() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).collection("grades").doc("1712").collection("final")
            .orderBy("name")
            .onSnapshot(function (snap) {

                snap.forEach(function (doc) {
                    // Getting the data and displaying it through the database
                    var mark = doc.data().mark;
                    document.getElementById("comp1712Final").innerHTML =
                        mark;

                })

            })


    })
}

//submit button does this stuff: 
setComp1536QuizAddListener();
getComp1536QuizAverage("1536", "quizzes");

//Adds quiz and its grade into the database 
//DOESNT UPDATE grade / duplicate quizzes
function setComp1536QuizAddListener() {
    document.getElementById("submit9").addEventListener("click", function (e) {
        //Variables for different types of course and assessments
        let course = "1536";
        let type = "quizzes";
        let quiznum = document.getElementById("experience9").value;
        let grade = document.getElementById("message-text9").value;
        console.log("COMP 1536 " + quiznum + " " + grade);

        firebase.auth().onAuthStateChanged(function (user) {
            console.log(user.uid);
            db.collection("users").doc(user.uid).collection("grades").doc(course)
                .collection(type)
                .add({
                    name: quiznum,
                    mark: grade
                })
        });


    });
}


showComp1536QuizMarks();

function showComp1536QuizMarks() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).collection("grades").doc("1536").collection("quizzes")
            .orderBy("name")
            .onSnapshot(function (snap) {

                var counter = 1;
                snap.forEach(function (doc) {
                    // Getting the data and displaying it through the database
                    var mark = doc.data().mark;
                    document.getElementById("comp1536Quiz" + counter).innerHTML = mark;
                    counter++;
                })

            })


    })
}

function getComp1536QuizAverage(course, type) {
    firebase.auth().onAuthStateChanged(function (user) {
        var dbRef = db.collection('users').doc(user.uid).collection("grades").doc(course)
            .collection(type);
        let sum = 0;
        let totalQuiz = 0.0;
        dbRef.onSnapshot(function (snap) {
            //Checks each document in the collection
            snap.forEach(function (doc) {
                var mark = Number(doc.data().mark);
                console.log(doc.data().name + " ", mark);
                sum += mark;

                totalQuiz++

            });

            console.log("sum of marks ", sum);
            let average = sum / totalQuiz;
            console.log("AVERAGE ", average);
            document.getElementById("comp1536AverageQuizzes").innerHTML = average.toFixed(2) +
                "/5";

            sum = 0;
            totalQuiz = 0;
        });

    });
}

//submit button does this stuff: 
setComp1536LabAddListener();
getComp1536LabAverage("1536", "labs");

//Adds lab and its grade into the database 
//DOESNT UPDATE grade / duplicate lab
function setComp1536LabAddListener() {
    document.getElementById("submit10").addEventListener("click", function (e) {
        //Variables for different types of course and assessments
        let course = "1536";
        let type = "labs";
        let labnum = document.getElementById("experience10").value;
        let grade = document.getElementById("message-text10").value;
        console.log("COMP 1536 " + labnum + " " + grade);

        firebase.auth().onAuthStateChanged(function (user) {
            console.log(user.uid);
            db.collection("users").doc(user.uid).collection("grades").doc(course)
                .collection(type)
                .add({
                    name: labnum,
                    mark: grade
                })
        });


    });
}


showComp1536LabMarks();

function showComp1536LabMarks() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).collection("grades").doc("1536").collection("labs")
            .orderBy("name")
            .onSnapshot(function (snap) {

                var counter = 1;
                snap.forEach(function (doc) {
                    // Getting the data and displaying it through the database
                    var mark = doc.data().mark;
                    document.getElementById("comp1536Lab" + counter).innerHTML = mark;
                    counter++;
                })

            })


    })
}

function getComp1536LabAverage(course, type) {
    firebase.auth().onAuthStateChanged(function (user) {
        var dbRef = db.collection('users').doc(user.uid).collection("grades").doc(course)
            .collection(type);
        let sum = 0;
        let totalLab = 0.0;
        dbRef.onSnapshot(function (snap) {
            //Checks each document in the collection(Lab)
            snap.forEach(function (doc) {
                var mark = Number(doc.data().mark);
                console.log(doc.data().name + " ", mark);
                sum += mark;

                totalLab++

            });

            console.log("sum of marks ", sum);
            let average = sum / totalLab;
            console.log("AVERAGE ", average);
            document.getElementById("comp1536AverageLabs").innerHTML = average.toFixed(2) +
                "/5";

            sum = 0;
            totalLab = 0;
        });

    });
}

//submit button does this stuff: 
setComp1536MidtermAddListener();
showComp1536MidtermMarks();

//Adds midterm and its grade into the database 
//DOESNT UPDATE grade / duplicate midterm
function setComp1536MidtermAddListener() {
    document.getElementById("submit11").addEventListener("click", function (e) {
        //Variables for different types of course and assessments
        let course = "1536";
        let type = "midterm";
        let midtermnum = document.getElementById("experience11").value;
        let grade = document.getElementById("message-text11").value;
        console.log("COMP 1536 " + midtermnum + " " + grade);

        firebase.auth().onAuthStateChanged(function (user) {
            console.log(user.uid);
            db.collection("users").doc(user.uid).collection("grades").doc(course)
                .collection(type)
                .add({
                    name: midtermnum,
                    mark: grade
                })
        });


    });
}




function showComp1536MidtermMarks() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).collection("grades").doc("1536").collection("midterm")
            .orderBy("name")
            .onSnapshot(function (snap) {

                snap.forEach(function (doc) {
                    // Getting the data and displaying it through the database
                    var mark = doc.data().mark;
                    document.getElementById("comp1536Midterm").innerHTML =
                        mark;

                })

            })


    })
}

//submit button does this stuff: 
setComp1536FinalAddListener();
showComp1536FinalMarks();

//Adds final and its grade into the database 
//DOESNT UPDATE grade / duplicate final
function setComp1536FinalAddListener() {
    document.getElementById("submit12").addEventListener("click", function (e) {
        //Variables for different types of course and assessments
        let course = "1536";
        let type = "final";
        let finalnum = document.getElementById("experience12").value;
        let grade = document.getElementById("message-text12").value;
        console.log("COMP 1536 " + finalnum + " " + grade);

        firebase.auth().onAuthStateChanged(function (user) {
            console.log(user.uid);
            db.collection("users").doc(user.uid).collection("grades").doc(course)
                .collection(type)
                .add({
                    name: finalnum,
                    mark: grade
                })
        });


    });
}




function showComp1536FinalMarks() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).collection("grades").doc("1536").collection("final")
            .orderBy("name")
            .onSnapshot(function (snap) {

                snap.forEach(function (doc) {
                    // Getting the data and displaying it through the database
                    var mark = doc.data().mark;
                    document.getElementById("comp1536Final").innerHTML =
                        mark;

                })

            })


    })
}

//submit button does this stuff: 
setComp1930QuizAddListener();
getComp1930QuizAverage("1930", "quizzes");

//Adds quiz and its grade into the database 
//DOESNT UPDATE grade / duplicate quizzes
function setComp1930QuizAddListener() {
    document.getElementById("submit13").addEventListener("click", function (e) {
        //Variables for different types of course and assessments
        let course = "1930";
        let type = "quizzes";
        let quiznum = document.getElementById("experience13").value;
        let grade = document.getElementById("message-text13").value;
        console.log("COMP 1930 " + quiznum + " " + grade);

        firebase.auth().onAuthStateChanged(function (user) {
            console.log(user.uid);
            db.collection("users").doc(user.uid).collection("grades").doc(course)
                .collection(type)
                .add({
                    name: quiznum,
                    mark: grade
                })
        });


    });
}


showComp1930QuizMarks();

function showComp1930QuizMarks() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).collection("grades").doc("1930").collection("quizzes")
            .orderBy("name")
            .onSnapshot(function (snap) {

                var counter = 1;
                snap.forEach(function (doc) {
                    // Getting the data and displaying it through the database
                    var mark = doc.data().mark;
                    document.getElementById("comp1930Quiz" + counter).innerHTML = mark;
                    counter++;
                })

            })


    })
}

function getComp1930QuizAverage(course, type) {
    firebase.auth().onAuthStateChanged(function (user) {
        var dbRef = db.collection('users').doc(user.uid).collection("grades").doc(course)
            .collection(type);
        let sum = 0;
        let totalQuiz = 0.0;
        dbRef.onSnapshot(function (snap) {
            //Checks each document in the collection(QUIZZES)
            snap.forEach(function (doc) {
                var mark = Number(doc.data().mark);
                console.log(doc.data().name + " ", mark);
                sum += mark;

                totalQuiz++

            });

            console.log("sum of marks ", sum);
            let average = sum / totalQuiz;
            console.log("AVERAGE ", average);
            document.getElementById("comp1930AverageQuizzes").innerHTML = average.toFixed(2) +
                "/3";

            sum = 0;
            totalQuiz = 0;

        });

    });

}


//submit button does this stuff: 
setComp1930IndividualAssignmentAddListener();
getComp1930IndividualAssignmentAverage("1930", "individual assignments");

//Adds assignment and its grade into the database 
//DOESNT UPDATE grade / duplicate assignment
function setComp1930IndividualAssignmentAddListener() {
    document.getElementById("submit14").addEventListener("click", function (e) {
        //Variables for different types of course and assessments
        let course = "1930";
        let type = "individual assignments";
        let assignmentnum = document.getElementById("experience14").value;
        let grade = document.getElementById("message-text14").value;
        console.log("COMP 1930 " + assignmentnum + " " + grade);

        firebase.auth().onAuthStateChanged(function (user) {
            console.log(user.uid);
            db.collection("users").doc(user.uid).collection("grades").doc(course)
                .collection(type)
                .add({
                    name: assignmentnum,
                    mark: grade
                })
        });


    });
}


showComp1930IndividualAssignmentMarks();

function showComp1930IndividualAssignmentMarks() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).collection("grades").doc("1930").collection(
                "individual assignments")
            .orderBy("name")
            .onSnapshot(function (snap) {

                var counter = 1;
                snap.forEach(function (doc) {
                    // Getting the data and displaying it through the database
                    var mark = doc.data().mark;
                    document.getElementById("comp1930IndividualAssignment" + counter)
                        .innerHTML =
                        mark;
                    counter++;
                })

            })


    })
}

function getComp1930IndividualAssignmentAverage(course, type) {
    firebase.auth().onAuthStateChanged(function (user) {
        var dbRef = db.collection('users').doc(user.uid).collection("grades").doc(course)
            .collection(type);
        let sum = 0;
        let totalAssignments = 0.0;
        dbRef.onSnapshot(function (snap) {
            //Checks each document in the collection assignment
            snap.forEach(function (doc) {
                var mark = Number(doc.data().mark);
                console.log(doc.data().name + " ", mark);
                sum += mark;

                totalAssignments++

            });

            console.log("sum of marks ", sum);
            let average = sum / totalAssignments;
            console.log("AVERAGE ", average);
            document.getElementById("comp1930AverageIndividualAssignments").innerHTML = average
                .toFixed(
                    2) + "/10";

            sum = 0;
            totalAssignments = 0;

        });

    });
}

//submit button does this stuff: 
setComp1930GroupAssignmentAddListener();
getComp1930GroupAssignmentAverage("1930", "group assignments");

//Adds assignment and its grade into the database 
//DOESNT UPDATE grade / duplicate assignment
function setComp1930GroupAssignmentAddListener() {
    document.getElementById("submit15").addEventListener("click", function (e) {
        //Variables for different types of course and assessments
        let course = "1930";
        let type = "group assignments";
        let assignmentnum = document.getElementById("experience15").value;
        let grade = document.getElementById("message-text15").value;
        console.log("COMP 1930 " + assignmentnum + " " + grade);

        firebase.auth().onAuthStateChanged(function (user) {
            console.log(user.uid);
            db.collection("users").doc(user.uid).collection("grades").doc(course)
                .collection(type)
                .add({
                    name: assignmentnum,
                    mark: grade
                })
        });


    });
}


showComp1930GroupAssignmentMarks();

function showComp1930GroupAssignmentMarks() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).collection("grades").doc("1930").collection(
                "group assignments")
            .orderBy("name")
            .onSnapshot(function (snap) {

                var counter = 1;
                snap.forEach(function (doc) {
                    // Getting the data and displaying it through the database
                    var mark = doc.data().mark;
                    document.getElementById("comp1930GroupAssignment" + counter).innerHTML =
                        mark;
                    counter++;
                })

            })


    })
}

function getComp1930GroupAssignmentAverage(course, type) {
    firebase.auth().onAuthStateChanged(function (user) {
        var dbRef = db.collection('users').doc(user.uid).collection("grades").doc(course)
            .collection(type);
        let sum = 0;
        let totalAssignments = 0.0;
        dbRef.onSnapshot(function (snap) {
            //Checks each document in the collection assignment
            snap.forEach(function (doc) {
                var mark = Number(doc.data().mark);
                console.log(doc.data().name + " ", mark);
                sum += mark;

                totalAssignments++

            });

            console.log("sum of marks ", sum);
            let average = sum / totalAssignments;
            console.log("AVERAGE ", average);
            document.getElementById("comp1930AverageGroupAssignment").innerHTML = average
                .toFixed(
                    2) + "/10";
            
            sum = 0;
            totalAssignments = 0;

        });

    });
}

//submit button does this stuff: 
setComp1930GroupPresentationAddListener();
getComp1930GroupPresentationAverage("1930", "group presentations");

//Adds presentation and its grade into the database 
//DOESNT UPDATE grade / duplicate presentation
function setComp1930GroupPresentationAddListener() {
    document.getElementById("submit16").addEventListener("click", function (e) {
        //Variables for different types of course and assessments
        let course = "1930";
        let type = "group presentations";
        let assignmentnum = document.getElementById("experience16").value;
        let grade = document.getElementById("message-text16").value;
        console.log("COMP 1930 " + assignmentnum + " " + grade);

        firebase.auth().onAuthStateChanged(function (user) {
            console.log(user.uid);
            db.collection("users").doc(user.uid).collection("grades").doc(course)
                .collection(type)
                .add({
                    name: assignmentnum,
                    mark: grade
                })
        });


    });
}


showComp1930GroupPresentationMarks();

function showComp1930GroupPresentationMarks() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).collection("grades").doc("1930").collection(
                "group presentations")
            .orderBy("name")
            .onSnapshot(function (snap) {

                var counter = 1;
                snap.forEach(function (doc) {
                    // Getting the data and displaying it through the database
                    var mark = doc.data().mark;
                    document.getElementById("comp1930Presentation" + counter).innerHTML =
                        mark;
                    counter++;
                })

            })


    })
}

function getComp1930GroupPresentationAverage(course, type) {
    firebase.auth().onAuthStateChanged(function (user) {
        var dbRef = db.collection('users').doc(user.uid).collection("grades").doc(course)
            .collection(type);
        let sum = 0;
        let totalPresentations = 0.0;
        dbRef.onSnapshot(function (snap) {
            //Checks each document in the collection presentation
            snap.forEach(function (doc) {
                var mark = Number(doc.data().mark);
                console.log(doc.data().name + " ", mark);
                sum += mark;

                totalPresentations++

            });

            console.log("sum of marks ", sum);
            let average = sum / totalPresentations;
            console.log("AVERAGE ", average);
            document.getElementById("comp1930AveragePresentations").innerHTML = average.toFixed(
                2) + "/10";
            
            sum = 0;
            totalPresentations = 0;

        });

    });
}

//submit button does this stuff: 
setComp1930FinalProjectAddListener();
showComp1930FinalProjectMarks();

//Adds project and its grade into the database 
//DOESNT UPDATE grade / duplicate quizzes
function setComp1930FinalProjectAddListener() {
    document.getElementById("submit17").addEventListener("click", function (e) {
        //Variables for different types of course and assessments
        let course = "1930";
        let type = "final project";
        let finalnum = document.getElementById("experience17").value;
        let grade = document.getElementById("message-text17").value;
        console.log("COMP 1930 " + finalnum + " " + grade);

        firebase.auth().onAuthStateChanged(function (user) {
            console.log(user.uid);
            db.collection("users").doc(user.uid).collection("grades").doc(course)
                .collection(type)
                .add({
                    name: finalnum,
                    mark: grade
                })
        });


    });
}




function showComp1930FinalProjectMarks() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).collection("grades").doc("1930").collection(
                "final project")
            .orderBy("name")
            .onSnapshot(function (snap) {

                snap.forEach(function (doc) {
                    // Getting the data and displaying it through the database
                    var mark = doc.data().mark;
                    document.getElementById("comp1930FinalProject").innerHTML =
                        mark;

                })

            })


    })
}

//submit button does this stuff: 
setComp1113QuizAddListener();
getComp1113QuizAverage("1113", "quizzes");

//Adds quiz and its grade into the database 
//DOESNT UPDATE grade / duplicate quizzes
function setComp1113QuizAddListener() {
    document.getElementById("submit18").addEventListener("click", function (e) {
        //Variables for different types of course and assessments
        let course = "1113";
        let type = "quizzes";
        let quiznum = document.getElementById("experience18").value;
        let grade = document.getElementById("message-text18").value;
        console.log("COMP 1113 " + quiznum + " " + grade);

        firebase.auth().onAuthStateChanged(function (user) {
            console.log(user.uid);
            db.collection("users").doc(user.uid).collection("grades").doc(course)
                .collection(type)
                .add({
                    name: quiznum,
                    mark: grade
                })
        });


    });
}


showComp1113QuizMarks();

function showComp1113QuizMarks() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).collection("grades").doc("1113").collection("quizzes")
            .orderBy("name")
            .onSnapshot(function (snap) {

                var counter = 1;
                snap.forEach(function (doc) {
                    // Getting the data and displaying it through the database
                    var mark = doc.data().mark;
                    document.getElementById("comp1113Quiz" + counter).innerHTML = mark;
                    counter++;
                })

            })


    })
}

function getComp1113QuizAverage(course, type) {
    firebase.auth().onAuthStateChanged(function (user) {
        var dbRef = db.collection('users').doc(user.uid).collection("grades").doc(course)
            .collection(type);
        let sum = 0;
        let totalQuiz = 0.0;
        dbRef.onSnapshot(function (snap) {
            //Checks each document in the collection(QUIZZES)
            snap.forEach(function (doc) {
                var mark = Number(doc.data().mark);
                console.log(doc.data().name + " ", mark);
                sum += mark;

                totalQuiz++

            });

            console.log("sum of marks ", sum);
            let average = sum / totalQuiz;
            console.log("AVERAGE ", average);
            document.getElementById("comp1113AverageQuizzes").innerHTML = average.toFixed(2) +
                "/5";
            
            sum = 0;
            totalQuiz = 0;

        });

    });
}

//submit button does this stuff: 
setComp1113AssignmentAddListener();
getComp1113AssignmentAverage("1113", "assignments");

//Adds assignment and its grade into the database 
//DOESNT UPDATE grade / duplicate quizzes
function setComp1113AssignmentAddListener() {
    document.getElementById("submit19").addEventListener("click", function (e) {
        //Variables for different types of course and assessments
        let course = "1113";
        let type = "assignments";
        let assignmentnum = document.getElementById("experience19").value;
        let grade = document.getElementById("message-text19").value;
        console.log("COMP 1113 " + assignmentnum + " " + grade);

        firebase.auth().onAuthStateChanged(function (user) {
            console.log(user.uid);
            db.collection("users").doc(user.uid).collection("grades").doc(course)
                .collection(type)
                .add({
                    name: assignmentnum,
                    mark: grade
                })
        });


    });
}


showComp1113AssignmentMarks();

function showComp1113AssignmentMarks() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).collection("grades").doc("1113").collection(
                "assignments")
            .orderBy("name")
            .onSnapshot(function (snap) {

                var counter = 1;
                snap.forEach(function (doc) {
                    // Getting the data and displaying it through the database
                    var mark = doc.data().mark;
                    document.getElementById("comp1113Assignment" + counter).innerHTML =
                        mark;
                    counter++;
                })

            })


    })
}

function getComp1113AssignmentAverage(course, type) {
    firebase.auth().onAuthStateChanged(function (user) {
        var dbRef = db.collection('users').doc(user.uid).collection("grades").doc(course)
            .collection(type);
        let sum = 0;
        let totalAssignments = 0.0;
        dbRef.onSnapshot(function (snap) {
            //Checks each document in the collection(assignment)
            snap.forEach(function (doc) {
                var mark = Number(doc.data().mark);
                console.log(doc.data().name + " ", mark);
                sum += mark;

                totalAssignments++

            });

            console.log("sum of marks ", sum);
            let average = sum / totalAssignments;
            console.log("AVERAGE ", average);
            document.getElementById("comp1113AssignmentAverage").innerHTML = average.toFixed(
                2) + "/28";

            sum = 0;
            totalAssignments = 0;

        });

    });
}

//submit button does this stuff: 
setComp1113MidtermAddListener();
showComp1113MidtermMarks();

//Adds midterm and its grade into the database 
//DOESNT UPDATE grade / duplicate midterm
function setComp1113MidtermAddListener() {
    document.getElementById("submit20").addEventListener("click", function (e) {
        //Variables for different types of course and assessments
        let course = "1113";
        let type = "midterm";
        let midtermnum = document.getElementById("experience20").value;
        let grade = document.getElementById("message-text20").value;
        console.log("COMP 1113 " + midtermnum + " " + grade);

        firebase.auth().onAuthStateChanged(function (user) {
            console.log(user.uid);
            db.collection("users").doc(user.uid).collection("grades").doc(course)
                .collection(type)
                .add({
                    name: midtermnum,
                    mark: grade
                })
        });


    });
}




function showComp1113MidtermMarks() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).collection("grades").doc("1113").collection("midterm")
            .orderBy("name")
            .onSnapshot(function (snap) {

                snap.forEach(function (doc) {
                    // Getting the data and displaying it through the database
                    var mark = doc.data().mark;
                    document.getElementById("comp1113Midterm").innerHTML =
                        mark;

                })

            })


    })
}

//submit button does this stuff: 
setComp1113FinalAddListener();
showComp1113FinalMarks();

//Adds quiz and its grade into the database 
//DOESNT UPDATE grade / duplicate quizzes
function setComp1113FinalAddListener() {
    document.getElementById("submit21").addEventListener("click", function (e) {
        //Variables for different types of course and assessments
        let course = "1113";
        let type = "final";
        let finalnum = document.getElementById("experience21").value;
        let grade = document.getElementById("message-text21").value;
        console.log("COMP 1113 " + finalnum + " " + grade);

        firebase.auth().onAuthStateChanged(function (user) {
            console.log(user.uid);
            db.collection("users").doc(user.uid).collection("grades").doc(course)
                .collection(type)
                .add({
                    name: finalnum,
                    mark: grade
                })
        });


    });
}




function showComp1113FinalMarks() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).collection("grades").doc("1113").collection("final")
            .orderBy("name")
            .onSnapshot(function (snap) {

                snap.forEach(function (doc) {
                    // Getting the data and displaying it through the database
                    var mark = doc.data().mark;
                    document.getElementById("comp1113Final").innerHTML =
                        mark;

                })

            })


    })
}

//submit button does this stuff: 
setComm1116LetterAddListener();
showComm1116LetterMarks();

//Adds letter and its grade into the database 
//DOESNT UPDATE grade / duplicate quizzes
function setComm1116LetterAddListener() {
    document.getElementById("submit22").addEventListener("click", function (e) {
        //Variables for different types of course and letter
        let course = "1116";
        let type = "complaint letter";
        let letternum = document.getElementById("experience22").value;
        let grade = document.getElementById("message-text22").value;
        console.log("COMM 1116 " + letternum + " " + grade);

        firebase.auth().onAuthStateChanged(function (user) {
            console.log(user.uid);
            db.collection("users").doc(user.uid).collection("grades").doc(course)
                .collection(type)
                .add({
                    name: letternum,
                    mark: grade
                })
        });


    });
}




function showComm1116LetterMarks() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).collection("grades").doc("1116").collection("complaint letter")
            .orderBy("name")
            .onSnapshot(function (snap) {

                snap.forEach(function (doc) {
                    // Getting the data and displaying it through the database
                    var mark = doc.data().mark;
                    document.getElementById("comm1116Letter").innerHTML =
                        mark;

                })

            })


    })
}

//submit button does this stuff: 
setComm1116ReportAddListener();
showComm1116ReportMarks();

//Adds report and its grade into the database 
//DOESNT UPDATE grade / duplicate report
function setComm1116ReportAddListener() {
    document.getElementById("submit23").addEventListener("click", function (e) {
        //Variables for different types of course and assessments
        let course = "1116";
        let type = "incident report";
        let reportnum = document.getElementById("experience23").value;
        let grade = document.getElementById("message-text23").value;
        console.log("COMM 1116 " + reportnum + " " + grade);

        firebase.auth().onAuthStateChanged(function (user) {
            console.log(user.uid);
            db.collection("users").doc(user.uid).collection("grades").doc(course)
                .collection(type)
                .add({
                    name: reportnum,
                    mark: grade
                })
        });


    });
}




function showComm1116ReportMarks() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).collection("grades").doc("1116").collection("incident report")
            .orderBy("name")
            .onSnapshot(function (snap) {

                snap.forEach(function (doc) {
                    // Getting the data and displaying it through the database
                    var mark = doc.data().mark;
                    document.getElementById("comm1116Report").innerHTML =
                        mark;

                })

            })


    })
}

//submit button does this stuff: 
setComm1116MidtermAddListener();
showComm1116MidtermMarks();

//Adds midterm and its grade into the database 
//DOESNT UPDATE grade / duplicate midterm
function setComm1116MidtermAddListener() {
    document.getElementById("submit24").addEventListener("click", function (e) {
        //Variables for different types of course and assessments
        let course = "1116";
        let type = "midterm";
        let midtermnum = document.getElementById("experience24").value;
        let grade = document.getElementById("message-text24").value;
        console.log("COMM 1116 " + midtermnum + " " + grade);

        firebase.auth().onAuthStateChanged(function (user) {
            console.log(user.uid);
            db.collection("users").doc(user.uid).collection("grades").doc(course)
                .collection(type)
                .add({
                    name: midtermnum,
                    mark: grade
                })
        });


    });
}




function showComm1116MidtermMarks() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).collection("grades").doc("1116").collection("midterm")
            .orderBy("name")
            .onSnapshot(function (snap) {

                snap.forEach(function (doc) {
                    // Getting the data and displaying it through the database
                    var mark = doc.data().mark;
                    document.getElementById("comm1116Midterm").innerHTML =
                        mark;

                })

            })


    })
}

//submit button does this stuff: 
setComm1116FinalAddListener();
showComm1116FinalMarks();

//Adds final and its grade into the database 
//DOESNT UPDATE grade / duplicate final
function setComm1116FinalAddListener() {
    document.getElementById("submit25").addEventListener("click", function (e) {
        //Variables for different types of course and assessments
        let course = "1116";
        let type = "final";
        let finalnum = document.getElementById("experience25").value;
        let grade = document.getElementById("message-text25").value;
        console.log("COMM 1116 " + finalnum + " " + grade);

        firebase.auth().onAuthStateChanged(function (user) {
            console.log(user.uid);
            db.collection("users").doc(user.uid).collection("grades").doc(course)
                .collection(type)
                .add({
                    name: finalnum,
                    mark: grade
                })
        });


    });
}




function showComm1116FinalMarks() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).collection("grades").doc("1116").collection("final")
            .orderBy("name")
            .onSnapshot(function (snap) {

                snap.forEach(function (doc) {
                    // Getting the data and displaying it through the database
                    var mark = doc.data().mark;
                    document.getElementById("comm1116Final").innerHTML =
                        mark;

                })

            })


    })
}

//submit button does this stuff: 
setComm1116PresentationAddListener();
showComm1116PresentationMarks();

//Adds presentation and its grade into the database 
//DOESNT UPDATE grade / duplicate presentation
function setComm1116PresentationAddListener() {
    document.getElementById("submit26").addEventListener("click", function (e) {
        //Variables for different types of course and assessments
        let course = "1116";
        let type = "presentation";
        let presentationnum = document.getElementById("experience26").value;
        let grade = document.getElementById("message-text26").value;
        console.log("COMM 1116 " + presentationnum + " " + grade);

        firebase.auth().onAuthStateChanged(function (user) {
            console.log(user.uid);
            db.collection("users").doc(user.uid).collection("grades").doc(course)
                .collection(type)
                .add({
                    name: presentationnum,
                    mark: grade
                })
        });


    });
}




function showComm1116PresentationMarks() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).collection("grades").doc("1116").collection("presentation")
            .orderBy("name")
            .onSnapshot(function (snap) {

                snap.forEach(function (doc) {
                    // Getting the data and displaying it through the database
                    var mark = doc.data().mark;
                    document.getElementById("comm1116Presentation").innerHTML =
                        mark;

                })

            })


    })
}

 //scrolling anchor button to see more
 $(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

});

mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // Chrome, else

}
