const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes
   .map(node => node.dataset.time)
   .map(timeCode => {
      const [mins, secs] = timeCode.split(':')
      .map(parseFloat);
      
      return (mins * 60) + secs;
   });
  
let totalSeconds = seconds.reduce((a,b) => a + b)

// Since 1 hour = 3,600 secs
const hours = Math.floor(totalSeconds / 3600);

// Get the remaining seconds 
totalSeconds = totalSeconds % 3600;

// since 1 min = 60 secs
const mins = Math.floor(totalSeconds / 60);

// Get the remaining secods
const secs = totalSeconds % 60;

console.log(`${hours}:${mins}:${secs}`);