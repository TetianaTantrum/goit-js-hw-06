// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>)
// и количество элементов в категории(всех вложенных в него < li >).
// В результате, в консоли будут выведены такие сообщения.
// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const listEl = document.querySelectorAll(".item");
const titleEl = document.querySelectorAll("h2");
const elemEl = document.querySelectorAll("#categories ul");
console.log("Number of categories: ", listEl.length);
for (let el of listEl) {
  console.log("Category: ", el.querySelector("h2").innerHTML);
  console.log("Elements: ", el.querySelectorAll("li").length);
}

// console.log("Category: ", titleEl[0].textContent);
// console.log(`Elements: `);
// console.log("Category: ", titleEl[1].textContent);

// console.log("Category: ", titleEl[2].textContent);
