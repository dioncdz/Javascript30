// Not a ton of code, but hard to
const nav = document.querySelector("#main");
let topOfNav = nav.offsetTop;

function fixNav() {
  if (window.scrollY >= topOfNav) {
    // It's better to put the class in the body instead directly to the target element
    // PaddingTop offset is important because once an element is position-fixed
    // ...it is out of the flow so succeeding element will take its previous space
    document.body.style.paddingTop = nav.offsetHeight + "px";
    document.body.classList.add("fixed-nav");
  } else {
    document.body.classList.remove("fixed-nav");
    document.body.style.paddingTop = 0;
  }
}

window.addEventListener("scroll", fixNav);