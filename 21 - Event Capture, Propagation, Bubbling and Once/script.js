const divs = document.querySelectorAll("div");
      const button = document.querySelector("button");

function logText(e) {
   console.log(this.classList.value);
   // e.stopPropagation(); // stop bubbling!
   // console.log(this); // unbinds this element
}

divs.forEach((div) =>
   div.addEventListener("click", logText, {
      // By default capture is false, event bubbles up
      // If it is set to true, it will bubble down
      capture: false,
      // Once will only let you execute the listener 'once'
      // You need to refresh the page for you to click on it again
      once: true,
   })
);

button.addEventListener("click",() => {
      console.log("Click!!!");
   }, { once: true,}
);