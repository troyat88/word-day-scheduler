//var timeBlock = $("span")
//var eventEntry = $("input")
//var saveButton = $("button")

//function for updating time every second
function setTime(){
var dateTime = moment().format('MMMM Do YYYY, h:mm:ss a')
$("#currentDay").text(dateTime);
}
setInterval(setTime, 1000);

setTime()

// create a function to color code timeblocks
function colorCode(){

    var time = moment().hours();
    //console.log(time)

    $(".form-control").each(function() {
        var xtime = parseInt($(this).attr("id"))
        //console.log(xtime)

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




$(".saveBtn").click(function(){
    var eventEntered = $(this).siblings(".form-control").val();
    //console.log(eventEntered)
    var eventTime = $(this).siblings(".input-group-text").text();
    //console.log(eventTime)
    localStorage.setItem(eventTime, eventEntered);
    if (eventEntered == ""){
    alert("Please verify your entry");
    return;
    
    }  
});

//function renderEvents(){
    var savedEvent = localStorage.getItem("8AM");
    $("#0800").val(savedEvent);
    var savedEvent1 = localStorage.getItem("9AM");
    $("#0900").val(savedEvent1);
    var savedEvent2 = localStorage.getItem("10AM");
    $("#1000").val(savedEvent2);
    var savedEvent3 = localStorage.getItem("11AM");
    $("#1100").val(savedEvent3);
    var savedEvent4 = localStorage.getItem("12PM");
    $("#1200").val(savedEvent4);
    var savedEvent5 = localStorage.getItem("1PM");
    $("#1300").val(savedEvent5);
    var savedEvent6 = localStorage.getItem("2PM");
    $("#1400").val(savedEvent6);
    var savedEvent7 = localStorage.getItem("3PM");
    $("#1500").val(savedEvent7);
    var savedEvent8 = localStorage.getItem("4PM");
    $("#1600").val(savedEvent8);
    var savedEvent9 = localStorage.getItem("5PM");
    $("#1700").val(savedEvent9);
    var savedEvent10 = localStorage.getItem("6PM");
    $("#1800").val(savedEvent10);
    var savedEvent11 = localStorage.getItem("7PM");
    $("#1900").val(savedEvent11);
    var savedEvent12 = localStorage.getItem("8PM");
    $("#2000").val(savedEvent12);
//}
//renderEvents()



















