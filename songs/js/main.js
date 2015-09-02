function syncClock() {
    var clock = document.querySelector("#header ul.clock a");
    var date = new Date().toLocaleDateString();
    var time = new Date().toLocaleTimeString();
    if(clock && time){
        clock.innerHTML = date + "&emsp;" + time;
        setTimeout(syncClock, 500);
    } else {
        console.log("cannot update clock.");
    }
}
setTimeout(syncClock, 500);

window.onload = function() {
  var layzr = new Layzr({
  });
}
