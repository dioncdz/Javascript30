const hourClock = document.querySelector('.hour');
const minutesClock = document.querySelector('.minutes');
const secondsClock = document.querySelector('.seconds');

function setClock() {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes()
    const seconds = now.getSeconds();

    hourClock.textContent = `${hour < 10 ? '0' + hour : hour}`
    minutesClock.textContent = `:${minutes < 10 ? '0' + minutes : minutes}:` 
    secondsClock.textContent = ` ${seconds < 10 ? '0' + seconds : seconds }`
}

setClock()

setInterval(setClock, 1000)