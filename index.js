
var everySec = setInterval(countdown, 1000);

function countdown() {

  var timer = $("#countdown")

  var anniversary = new Date("July 8, 2020 00:00:00").getTime();
  var now = new Date().getTime();
  var timeLeft = anniversary - now;

  var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeLeft % (1000*60*60*24)) / (1000*60*60));
  var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000*60));
  var seconds = Math.floor((timeLeft % (1000*60)) / 1000);

  console.log(days, hours, minutes, seconds);
  timer.text(days + "d " + hours + "h " + minutes + "m " + seconds + "s");
}
