/****************************
 * // ELEMENTS
 *****************************/
const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

/****************************
 * // FUNCTION
 *****************************/
function handleEnter() {
   this.classList.add("trigger-enter");
   // If we use regular function syntax, 'this' will point to the window object
   // If we use arrow function, it will point to the parent object
   setTimeout(
      () =>
      // if(this.classList.contains("trigger-enter")){
      //    this.classList.add("trigger-enter-active")
      // }
      // Above is same as below
      this.classList.contains("trigger-enter") &&
      this.classList.add("trigger-enter-active"),
      150
   );
   background.classList.add("open");

   // This is inside the function to point at the parent Object being hovered (ul)
   const dropdown = this.querySelector(".dropdown");
   // Gets ABSOLUTE coordinates of the parent object
   const dropdownCoords = dropdown.getBoundingClientRect();
   // This deals with the ABSOLUTE coordinate
   const navCoords = nav.getBoundingClientRect();

   const coords = {
      height: dropdownCoords.height,
      width: dropdownCoords.width,
      // Must offset the nav to solve the coordinate problem
      top: dropdownCoords.top - navCoords.top,
      left: dropdownCoords.left - navCoords.left,
   };

   background.style.setProperty("width", `${coords.width}px`);
   background.style.setProperty("height", `${coords.height}px`);
   background.style.setProperty(
      "transform",
      `translate(${coords.left}px, ${coords.top}px)`
   );
}

function handleLeave() {
   this.classList.remove("trigger-enter", "trigger-enter-active");
   background.classList.remove("open");
}

/****************************
 * // EVENT LISTENERS
 *****************************/
triggers.forEach((trigger) =>
   trigger.addEventListener("mouseenter", handleEnter)
);
triggers.forEach((trigger) =>
   trigger.addEventListener("mouseleave", handleLeave)
);