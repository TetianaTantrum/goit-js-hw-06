const listEl = document.querySelectorAll(".item");
const titleEl = document.querySelectorAll("h2");
const elemEl = document.querySelectorAll("#categories ul");
console.log("Number of categories: ", listEl.length);
for (let el of listEl) {
  console.log("Category: ", el.querySelector("h2").innerHTML);
  console.log("Elements: ", el.querySelectorAll("li").length);
}
