//var timeBlock = $("span")
//var eventEntry = $("input")
var saveButton = $("button")

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

//var eventEntered;

$(".saveBtn").click(function(){
    var eventEntered = $(this).siblings(".form-control").val();
    console.log(eventEntered)
    var eventTime = $(this).siblings(".input-group-text").text();
    console.log(eventTime)
    localStorage.setItem(eventTime, eventEntered);
    if (eventEntered == ""){
    alert("Please verify your entry")
    }
});









