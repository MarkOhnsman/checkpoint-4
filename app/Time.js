function time() {
  var now = new Date().toLocaleTimeString();
  document.getElementById("time").innerHTML = now
}

function startTimeInterval() {
  setInterval(time, 1000)
}

startTimeInterval();