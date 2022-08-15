const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

function updateClock() {
    const currentDate = new Date();

    setTimeout(updateClock, 1000)
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();
    const hourDeg = (hour / 12) * 360;
    
    

}

updateClock()
document.getElementsByClassName("hour").style.colour = red;