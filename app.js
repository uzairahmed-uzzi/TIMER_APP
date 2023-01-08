var ashuratime = new Date(prompt("DATE OF ASHURA?", "JAN 1,1970"));
var ashuramili = ashuratime.getTime();

function setTimer() {
    var today = new Date();
    console.log(today);
    var todmili = today.getTime();
    var todhour = today.getHours();
    var todmin = today.getMinutes();
    var todsec = today.getSeconds();

    var ashurahour = (24 - todhour);
    var ashuramin = (60 - todmin);
    var ashurasec = (60 - todsec);


    var differencemili = ashuramili - todmili;
    var ashuraday = Math.floor(differencemili / (1000 * 60 * 60 * 24));
    console.log(ashuraday);


    var day = document.getElementById("day");
    var hour = document.getElementById("hour");
    var min = document.getElementById("min");
    var sec = document.getElementById("sec");
    day.innerHTML = ashuraday;
    hour.innerHTML = ashurahour;
    min.innerHTML = ashuramin;
    sec.innerHTML = ashurasec;
}
setInterval(setTimer, 1000);