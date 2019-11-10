var currentDay = document.getElementById("currentDay"); //Area where the date will display
currentDay.textContent = moment().format('LLLL'); //Sets the date at the top
var schedule = $("scheduleContainer"); //The whole collection of rows

var hourlyRow9 = $("hourlyRow9"); //Supposed to represent a single row in its entirety
var hourlyRow10 = $("hourlyRow10");
var hourlyRow11 = $("hourlyRow11");
var hourlyRow12 = $("hourlyRow12");
var hourlyRow1 = $("hourlyRow1");
var hourlyRow2 = $("hourlyRow2");
var hourlyRow3 = $("hourlyRow3");
var hourlyRow4 = $("hourlyRow4");
var hourlyRow5 = $("hourlyRow5");

var dayTime9 = $("dayTime9"); //Box containing the specific time for each row
var dayTime10 = $("dayTime10");
var dayTime11 = $("dayTime11");
var dayTime12 = $("dayTime12");
var dayTime1 = $("dayTime1");
var dayTime2 = $("dayTime2");
var dayTime3 = $("dayTime3");
var dayTime4 = $("dayTime4");
var dayTime5 = $("dayTime5");

var noteBox9 = $("noteBox9"); //Selects each text input field individually
var noteBox10 = $("noteBox10");
var noteBox11 = $("noteBox11");
var noteBox12 = $("noteBox12");
var noteBox1 = $("noteBox1");
var noteBox2 = $("noteBox2");
var noteBox3 = $("noteBox3");
var noteBox4 = $("noteBox4");
var noteBox5 = $("noteBox5");

var saveButton9 = $("saveButton9"); //Selects each save button individually
var saveButton10 = $("saveButton10");
var saveButton11 = $("saveButton11");
var saveButton12 = $("saveButton12");
var saveButton1 = $("saveButton1");
var saveButton2 = $("saveButton2");
var saveButton3 = $("saveButton3");
var saveButton4 = $("saveButton4");
var saveButton5 = $("saveButton5");

($("#noteBox9").val(localStorage.getItem("note9"))); //Grabs the saved values from local storage
($("#noteBox10").val(localStorage.getItem("note10")));
($("#noteBox11").val(localStorage.getItem("note11")));
($("#noteBox12").val(localStorage.getItem("note12")));
($("#noteBox1").val(localStorage.getItem("note1")));
($("#noteBox2").val(localStorage.getItem("note2")));
($("#noteBox3").val(localStorage.getItem("note3")));
($("#noteBox4").val(localStorage.getItem("note4")));
($("#noteBox5").val(localStorage.getItem("note5")));

$("#saveButton9").on("click", function(e) { //Allows info to be saved to local storage
    e.preventDefault();
    var x9 = localStorage.setItem("note9", ($("#noteBox9").val()));
})
$("#saveButton10").on("click", function(e) {
    e.preventDefault();
    var x10 = localStorage.setItem("note10", ($("#noteBox10").val()));
})   
$("#saveButton11").on("click", function(e) {
    e.preventDefault();
    var x11 = localStorage.setItem("note11", ($("#noteBox11").val()));
})
$("#saveButton12").on("click", function(e) {
    e.preventDefault();
    var x12 = localStorage.setItem("note12", ($("#noteBox12").val()));
})
$("#saveButton1").on("click", function(e) {
    e.preventDefault();
    var x1 = localStorage.setItem("note1", ($("#noteBox1").val()));
})
$("#saveButton2").on("click", function(e) {
    e.preventDefault();
    var x2 = localStorage.setItem("note2", ($("#noteBox2").val()));
})
$("#saveButton3").on("click", function(e) {
    e.preventDefault();
    var x3 = localStorage.setItem("note3", ($("#noteBox3").val()));
})
$("#saveButton4").on("click", function(e) {
    e.preventDefault();
    var x4 = localStorage.setItem("note4", ($("#noteBox4").val()));
})
$("#saveButton5").on("click", function(e) {
    e.preventDefault();
    var x5 = localStorage.setItem("note5", ($("#noteBox5").val()));
})

if((moment().hours()) >= 9 && (moment().hours()) < 10) { //Attempt at changing background color based on the time
$("noteBox9").css("background-color", "green");
}
else {
$("noteBox9").css("background-color", "red");
}

if((moment().hours()) >= 10 && (moment().hours()) < 11) {
$("noteBox10").css("background-color", "green");   
}
else {
$("noteBox10").css("background-color", "red");
}

if((moment().hours()) >= 11 && (moment().hours()) < 12) {
$("noteBox11").css("background-color", "green");    
}
else {
$("noteBox11").css("background-color", "red");
}

if((moment().hours()) >= 12 && (moment().hours()) < 13) {
$("noteBox12").css("background-color", "green");    
}
else {
$("noteBox12").css("background-color", "red");
}

if((moment().hours()) >= 13 && (moment().hours()) < 14) {
$("noteBox1").css("background-color", "green");    
}
else {
$("noteBox1").css("background-color", "red");
}

if((moment().hours()) >= 14 && (moment().hours()) < 15) {
$("noteBox2").css("background-color", "green");    
}
else {
$("noteBox2").css("background-color", "red");
}

if((moment().hours()) >= 15 && (moment().hours()) < 16) {
$("noteBox3").css("background-color", "green");    
}
else {
$("noteBox3").css("background-color", "red");
}

if((moment().hours()) >= 16 && (moment().hours()) < 17) {
$("noteBox4").css("background-color", "green");    
}
else {
$("noteBox4").css("background-color", "red");
}

if((moment().hours()) >= 17 && (moment().hours()) < 18) {
$("noteBox5").css("background-color", "green");   
}
else {
$("noteBox5").css("background-color", "red");
}