let box = document.querySelector(".box");
let form = document.querySelector(".form");
let btn = document.querySelector(".btn");
let section = document.querySelector(".section");

//! Event Bubbling
/* box.addEventListener("click", () => {
  alert("box");
});
form.addEventListener("click", () => {
  alert("form");
});
btn.addEventListener("click", () => {
  alert("Button");
}); */

//!Event Capturing

/* box.addEventListener(
  "click",
  () => {
    alert("box");
  },
  {
    capture: true,
  }
);
form.addEventListener(
  "click",
  () => {
    alert("form");
  },
  {
    capture: true,
  }
);
btn.addEventListener(
  "click",
  () => {
    alert("Button");
  },
  {
    capture: true,
  }
); */

//! We can stop Event Bubbling with the help of e.stopPropagation();
/* box.addEventListener("click", (e) => {
    e.stopPropagation();
  alert("box");
});
form.addEventListener("click", (e) => {
    e.stopPropagation();
  alert("form");
});
btn.addEventListener("click", (e) => {
    e.stopPropagation();
  alert("Button");
});
 */

//! Event Delegation

section.addEventListener("click", (e) => {
  alert(e.target.textContent);
});
