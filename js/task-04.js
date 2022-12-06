let counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counter = document.querySelector("#value");
console.log(counter);

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  counter.innerHTML = counterValue;
});
incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  counter.innerHTML = counterValue;
});
