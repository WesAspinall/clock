var intervalID = window.setInterval(function(){

var today = new Date();
var hours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();


var hoursHex= today.getHours().toString(16);
var minutesHex= today.getMinutes().toString(16);
var secondsHex= today.getSeconds().toString(16);

if (hours < 10) {
   hours = "0" + hours;
}

 if (minutes < 10) {
   minutes = "0" + minutes;
}

 if (seconds < 10) {
   seconds = "0" + seconds;
}

if (hoursHex < 10) {
   hoursHex = "0" + hoursHex;
}

 if (minutesHex < 10) {
   minutesHex = "0" + minutesHex;
}

 if (secondsHex < 10) {
   secondsHex = "0" + secondsHex;
}



var time = hours + ":" + minutes + ":" + seconds;
var hex ="#"+hoursHex+minutesHex+secondsHex;

$('.date').text(time);
$('.hex').text(hex);

$('.wrapper').css("background-color",hex);



} ,1000);

// ==================================================
