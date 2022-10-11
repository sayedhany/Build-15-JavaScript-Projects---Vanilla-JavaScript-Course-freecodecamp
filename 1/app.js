const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const reandomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[reandomNumber];
  // console.log(color.textContent, color[reandomNumber]);
  color.textContent = colors[reandomNumber];
});

function getRandomNumber() {
  return Math.trunc(Math.random() * colors.length);
}
