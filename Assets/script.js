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
    localStorage.setItem(rowEl, userInput)
});





