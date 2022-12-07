const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector("#ingredients");
const elements = [];
for (const ingredient of ingredients) {
  const li = document.createElement("li");
  li.innerText = ingredient;
  elements.push(li.outerHTML);
}
ul.insertAdjacentHTML("beforeend", elements.join("\n"));
console.log(ul);
