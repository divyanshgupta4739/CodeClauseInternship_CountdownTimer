//you can change your time and date as per your choice from here 
const countdownDate = new Date("2024-10-10T23:59:59").getTime(); 

const x = setInterval(function() {
const now = new Date().getTime();

const distance = countdownDate - now;
//date and time 
const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("days").innerHTML = String(days).padStart(2, '0');
document.getElementById("hours").innerHTML = String(hours).padStart(2, '0');
document.getElementById("minutes").innerHTML = String(minutes).padStart(2, '0');
document.getElementById("seconds").innerHTML = String(seconds).padStart(2, '0');
if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").style.display = "none";
    document.getElementById("message").innerHTML = "Event has started!";
}
}, 1000)