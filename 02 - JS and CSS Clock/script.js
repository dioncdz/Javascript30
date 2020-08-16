const secHand = document.querySelector('.hand.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setClock() {
  const now = new Date();
  const secondsRatio = now.getSeconds()/60;
  const minutesRatio = (secondsRatio + now.getMinutes()) /60;
  const hourRatio = (minutesRatio + now.getHours()) / 12;
  
  secHand.style.transform = `rotate(${secondsRatio * 360}deg)`;
  minuteHand.style.transform = `rotate(${minutesRatio * 360}deg)`;
  hourHand.style.transform = `rotate(${hourRatio * 360}deg)`;
}

// Set the clock to current time 
setClock();

// Apply setClock() every second
setInterval(setClock, 1000);