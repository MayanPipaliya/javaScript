let time = document.getElementById("time");
let day = document.getElementById("day");

const clock = (() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (hours > 12) {
        hours = hours % 12;
    }

    if (hours < 10) {
        hours = "0" + hours;
    }

    time.innerHTML = `${hours}:${minutes}:${seconds}`

    let daysName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const days = daysName[date.getDay()]
    const monthsNum = months[date.getMonth()]
    const DATE = date.getDate();
    const year = date.getFullYear();
    day.innerHTML = `${days}, ${monthsNum} ${DATE}, ${year}`

    
   setTimeout(()=>{
     clock();

   },1000)
})
clock()
