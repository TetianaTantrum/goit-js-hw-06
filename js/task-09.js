const bodyColorName = document.querySelector("span.color");
const body = document.querySelector("body");

const ChangeColorBtn = document.querySelector("button.change-color");
ChangeColorBtn.addEventListener("click", onClickChangeColor);
function onClickChangeColor(evt) {
  evt.preventDefault();
  bodyColorName.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
