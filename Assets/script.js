// using moment js 
var currentDay = moment.format("dddd, MMMM Do");
$("#currentDay").text(currentDay);

// more variables 
var hour = moment().format("H");
var button = $(".saveBtn")
var moment = moment();


// click functions to save to local storage
button.on("click", function () {
    var dataInput = $(this).siblings(".description").val();
    var rowEl = $(this).parent().attr("id");
    localStorage.setItem(rowEl, dataInput)
});

$("#9 .description").val(localStorage.getItem("9"))
$("#10 .description").val(localStorage.getItem("10"))
$("#11 .description").val(localStorage.getItem("11"))
$("#12 .description").val(localStorage.getItem("12"))
$("#1 .description").val(localStorage.getItem("1"))
$("#2 .description").val(localStorage.getItem("2"))
$("#3 .description").val(localStorage.getItem("3"))
$("#4 .description").val(localStorage.getItem("4"))
$("#5 .description").val(localStorage.getItem("5"))





