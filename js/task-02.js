const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector("ul");
console.log(ul);
for (const ingredient of ingredients) {
  const li = document.createElement("li");
  li.innerText = ingredient;

  ul.appendChild(li);
}
