
// This calls all classes
const rows = document.getElementsByClassName("form-control");
let currentHour = parseInt(moment().format('H'));
// This sets the current time to the html page
$("#currentDay").text(moment().format("MMMM Do YYYY"));
// A for loop to run between the hours of 9 and 17 also runs through to find the time of past, present, future.
for (let i = 9; i < 18; i++) {
  var currentTextBox = $("#time" + i)
  var hourText = localStorage.getItem("hour" + i)
  if (hourText) {
    currentTextBox.val(hourText);
  }
  if (currentHour === i) {
    currentTextBox.addClass("present")
  } else if (currentHour < i) {
    console.log(currentHour, i)
    currentTextBox.addClass("future")
  }else{
    currentTextBox.addClass("past")
  } 
}
// save sata to local storage.
$(".saveTime").click(function () {
  var hourClicked = $(this).attr("data-hour");
  var hourText = $("#time" + hourClicked).val();
  localStorage.setItem("hour" + hourClicked, hourText);
});
