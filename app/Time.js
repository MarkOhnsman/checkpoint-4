function time() {
  console.log("wtf");
  var now = new Date().toLocaleTimeString();
  console.log(now);
  document.getElementById("time").innerHTML = now
}

time();