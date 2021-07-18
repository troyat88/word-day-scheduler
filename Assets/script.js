// Function for updating time every second
function setTime(){
var dateTime = moment().format('MMMM Do YYYY, h:mm:ss a')
$("#currentDay").text(dateTime);
}
setInterval(setTime, 1000);

setTime()

// Function to color code timeblocks
function colorCode(){

    var time = moment().hours();
    

    $(".form-control").each(function() {
        var xtime = parseInt($(this).attr("id"))
       

        if (time < xtime) {
            $(this).addClass("future")
        } else if (time > xtime){
            $(this).addClass("past")
        }else if (time == xtime){
            $(this).addClass("now")
        }

});
}
colorCode()



// Event listener and storage funtion for save button. Alert if saving blank.
$(".saveBtn").click(function(){
    var eventEntered = $(this).siblings(".form-control").val();
  
    var eventTime = $(this).siblings(".input-group-text").text();
   
    localStorage.setItem(eventTime, eventEntered);
    if (eventEntered == ""){
    alert("No entry saved. Please verify event for " + eventTime);
    return;
    
    }  
});

// Establish Saved Event variables to load from memory upon page load.
    var savedEvent = localStorage.getItem("8AM");
    $("#8").val(savedEvent);
    var savedEvent1 = localStorage.getItem("9AM");
    $("#9").val(savedEvent1);
    var savedEvent2 = localStorage.getItem("10AM");
    $("#10").val(savedEvent2);
    var savedEvent3 = localStorage.getItem("11AM");
    $("#11").val(savedEvent3);
    var savedEvent4 = localStorage.getItem("12PM");
    $("#12").val(savedEvent4);
    var savedEvent5 = localStorage.getItem("1PM");
    $("#13").val(savedEvent5);
    var savedEvent6 = localStorage.getItem("2PM");
    $("#14").val(savedEvent6);
    var savedEvent7 = localStorage.getItem("3PM");
    $("#15").val(savedEvent7);
    var savedEvent8 = localStorage.getItem("4PM");
    $("#16").val(savedEvent8);
    var savedEvent9 = localStorage.getItem("5PM");
    $("#17").val(savedEvent9);
    var savedEvent10 = localStorage.getItem("6PM");
    $("#18").val(savedEvent10);
    var savedEvent11 = localStorage.getItem("7PM");
    $("#19").val(savedEvent11);
    var savedEvent12 = localStorage.getItem("8PM");
    $("#20").val(savedEvent12);




















