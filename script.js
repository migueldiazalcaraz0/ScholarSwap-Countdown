function countdowntimer() {
    // Use "Oct" (Safari can be picky with "OCT")
    const countDownDate = new Date("Oct 16, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;
  
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    const el = document.getElementById("Countdown");
    if (!el) return; // safeguard
  
    if (distance < 0) {
      el.textContent = "EXPIRED";
    } else {
      el.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  }
  
  // show immediately, then update every second
  countdowntimer();
  setInterval(countdowntimer, 1000);
  