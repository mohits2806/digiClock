let hrs = document.getElementById('hrs');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let ampm = document.getElementById('ampm');

setInterval(() => {
    
    let time = new Date();
    let hours = time.getHours();

    let isPM = hours >= 12;
    ampm.innerHTML = isPM ? 'PM' : 'AM';

    hours = hours % 12 || 12; // Converting to 12-hour format

    hrs.innerHTML = (hours < 10 ? "0" : "") + hours;
    min.innerHTML = (time.getMinutes() < 10 ? "0" : "") + time.getMinutes();
    sec.innerHTML = (time.getSeconds() < 10 ? "0" : "") + time.getSeconds();

}, 1000);