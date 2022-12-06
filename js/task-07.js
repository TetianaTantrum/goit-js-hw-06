const text = document.querySelector("span#text");
const range = document.querySelector("input#font-size-control");

range.addEventListener("input", (evt) => {
  text.style.fontSize = `${evt.currentTarget.value}px`;
});
