// using moment js 
function momentDate() {
var currentDate = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDate);
};
// calling moment
momentDate();


var button = $(".saveBtn")
var moment = moment();


// click functions to save to local storage
button.on("click", function () {
    var dataInput = $(this).siblings(".description").val();
    
    var timeBlock = $(this).parent().attr("id");
    localStorage.setItem(timeBlock, dataInput)
    
});



// brings back the local storage that is typed in
$("#9 .description").val(localStorage.getItem("9"))
$("#10 .description").val(localStorage.getItem("10"))
$("#11 .description").val(localStorage.getItem("11"))
$("#12 .description").val(localStorage.getItem("12"))
$("#1 .description").val(localStorage.getItem("1"))
$("#2 .description").val(localStorage.getItem("2"))
$("#3 .description").val(localStorage.getItem("3"))
$("#4 .description").val(localStorage.getItem("4"))
$("#5 .description").val(localStorage.getItem("5"))





