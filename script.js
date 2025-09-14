function countdowntimer(){
    var countDownDate = new Date("OCT 16, 2025 00:00:00").getTime(); 
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("Countdown").innerHTML = 
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";


}
setInterval(countdowntimer, 1000);
