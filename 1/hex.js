const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  let hex1 = `#`;
  // console.log(getRandomNumber());
  for (let i = 0; i <= 5; i++) {
    hex1 += hex[getRandomNumber()];
  }
  // console.log(typeof hex1);
  document.body.style.backgroundColor = hex1;
  color.textContent = hex1;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
