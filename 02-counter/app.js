const increase = document.querySelector(".increase");
const reset = document.querySelector(".reset");
const decrease = document.querySelector(".decrease");
const btns = document.querySelector(".button-container");
const value = document.getElementById("value");

let current = 0;

btns.addEventListener("click", function (e) {
  const btn = e.target;
  if (btn.closest(".increase")) {
    current++;

    if (current > 0) {
      value.style.color = "green";
    }

    if (current === 0) value.style.color = "black";
  }
  if (btn.closest(".decrease")) {
    current--;

    if (current < 0) {
      value.style.color = "red";
    }
    if (current === 0) value.style.color = "black";
  }
  if (btn.closest(".reset")) {
    current = 0;

    value.style.color = "#222";
  }
  value.textContent = current;
});

// Second solution

// increase.addEventListener("click", function () {
//   current++;
//   value.textContent = current;
//   if (current > 0) {
//     value.style.color = "green";
//   }

//   if (current === 0) value.style.color = "black";
// });
// decrease.addEventListener("click", function () {
//   current--;
//   value.textContent = current;
//   if (current < 0) {
//     value.style.color = "red";
//   }
//   if (current === 0) value.style.color = "black";
// });
// reset.addEventListener("click", function () {
//   current = 0;
//   value.textContent = 0;
//   value.style.color = "black";
// });
