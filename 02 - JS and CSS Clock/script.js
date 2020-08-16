function setDate() {
  const now = new Date();
  const sec = now.getSeconds();
  const min = now.getMinutes();
  const hour = now.getHours();
  const secHand = document.querySelector('.second-hand');
  const minHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');
  console.log(sec, min, hour);
  secHand.style.transform = `rotate(${(sec * 6) + 90}deg)`;
  minHand.style.transform = `rotate(${(min * 6) + 90}deg)`;
  hourHand.style.transform = `rotate(${(hour * 30) + 90}deg)`;
}

setInterval(setDate, 1000);