const input = document.querySelector("input");
input.classList.add("invalid");

input.addEventListener("blur", onInputBlur);
function onInputBlur(evt) {
  console.log(evt);
  const { value } = evt.currentTarget;
  if (value.length >= evt.target.dataset.length) {
    evt.preventDefault();
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
}
