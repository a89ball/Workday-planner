//Displays current time, day, month and year using moment.
$("#currentDay").text(moment().format("MMMM DD, YYYY HH:mA"));

// This saves your events into local storage.
$(".saveBtn").on("click", function (){

    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);

});

// Using Jquery to update the hours as time goes on. Color showcases the time passed: Green=Future, Red=Current, Grey=Past.

function updateHour() {
    var timeNow = moment().hour();


    $(".time-block").each(function () {
        var currentHour = parseInt($(this).attr("id").split("-")[1]);


        if (currentHour < timeNow) {
            $(this).addClass('past');

        } else if (currentHour === timeNow) {
            $(this).addClass('present');

        } else {
            $(this).addClass('future');
        }
    });

};

updateHour()
//Bring Items back up from local storage for each hour.
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
$("#hour-18 .description").val(localStorage.getItem("hour-18"));
