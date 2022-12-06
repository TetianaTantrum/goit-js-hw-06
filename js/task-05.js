const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const initValue = output.innerText;
input.addEventListener("input", (event) => {
  if (event.currentTarget.value.length) {
    output.innerText = event.currentTarget.value;
  } else {
    output.innerText = initValue;
  }
});
