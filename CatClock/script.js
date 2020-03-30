function showCurrentTime() {
    let clock = document.querySelector(".clock")
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let meridian = "AM";
    if (hours >= 13) {
        hours = hours - 12
        meridian = "PM"
    }
    let minutes = currentTime.getMinutes();
    if (minutes < 10) { minutes = "0" + minutes }
    let seconds = currentTime.getSeconds();
    if (seconds < 10) { seconds = "0" + seconds }
    const time = `${hours}:${minutes}:${seconds}${meridian}`
    console.log(time);
    clock.innerText = time;
    let imageHeader = document.querySelector("#imageHeader")
    console.log(imageHeader, clock)
    if (hours == 4 && minutes == 20 && meridian == "PM") { imageHeader.innerText = "SMOKE TIME" }
    if (hours <= 12 && meridian == "AM") { imageHeader.innerText = "Early" }
    if (hours <= 4 && hours >= 1 && meridian == "PM") { imageHeader.innerText = "CODE TIME" }
    if (hours == 1 && minutes == 45 && meridian == "PM") { imageHeader.innerText = "RIGHT FUCKING NOW" }
}

var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

showCurrentTime();

setInterval(showCurrentTime, 1000)
