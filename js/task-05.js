// // Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой,
//     в спане должна отображаться строка "Anonymous".

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
// input.addEventListener("keydown", (event) => {
//   if (event.currentTarget.value.length) {
//     output.innerText = event.currentTarget.value;
//   } else {
//     output.innerText = initValue;
//   }
// });
