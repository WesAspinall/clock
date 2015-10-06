var intervalID = window.setInterval(function(){

var today = new Date();
var hours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();


var hoursHex= formatTime(today.getHours());
var minutesHex= formatTime(today.getMinutes());
var secondsHex= formatTime(today.getSeconds());


//used a turnary instead of an if statement for brevity
//function formatTime takes a number, converts that number to a string
function formatTime (num) {
  var hex= num.toString(16)
  hex = hex.length === 2 ? hex: "0"+ hex;
  return hex;
}

if (hours < 10) {
   hours = "0" + hours;
}

 if (minutes < 10) {
   minutes = "0" + minutes;
}

 if (seconds < 10) {
   seconds = "0" + seconds;
}



var time = hours + ":" + minutes + ":" + seconds;
var hex ="#"+hoursHex+minutesHex+secondsHex;

$('.date').text(time);
$('.hex').text(hex);

$('.wrapper').css("background-color",hex);



} ,1000);

// ==================================================
