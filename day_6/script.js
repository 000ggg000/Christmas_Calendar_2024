const d = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let weekday = weekdays[d.getDay()];

let month = months[d.getMonth()];

document.getElementById("month").innerHTML = month;
document.getElementById("weekday").innerHTML = weekday;
document.getElementById("day").innerHTML = d.getDate();
document.getElementById("year").innerHTML = d.getFullYear();
