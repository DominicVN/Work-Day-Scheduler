var dateTime = $('#currentDay');
var saveButton = $('.savebtn');
currentHour = dayjs().hour();

var text = document.querySelector(".col-8");
console.log(currentHour);

//logging date into currentDay ID
$(function printDateTime() {
  var now = dayjs().format("dddd, MMM DD YYYY")
  dateTime.text(now);
});

//giving row a colour based on pas present future 
$(function hourTracker() {
  $('.timeBlock').each(function () {
      var scheduleHour = $(this).attr("id").split("hour")[1];
      console.log("currentHour " + currentHour)
      console.log("schedulehHour " + scheduleHour)

      if (scheduleHour < currentHour) {
          $(this).addClass("past");
      }
      else if (scheduleHour == currentHour) {
          $(this).addClass("present");
      }
      else {
          $(this).addClass("future");
      }
  })
});


$(".saveBtn").on("click", function () {
  var value = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  localStorage.setItem(time, value);
});

$(function (){
});

$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("houor13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

dayjs();

