// Greeting
var today = new Date();
var hour = today.getHours();

var greeting;
if (hour < 12) {
    greeting = "Good morning!";
} else if (hour < 18) {
    greeting = "Good afternoon!";
} else {
    greeting = "Good evening!";
}

document.getElementById("greeting").innerHTML = greeting;

// Date and Time
function updateTime() {
    var now = new Date();
    var date = now.toDateString();
    var time = now.toLocaleTimeString();

    document.getElementById("datetime").innerHTML = date + " " + time;
}

setInterval(updateTime, 1000);
