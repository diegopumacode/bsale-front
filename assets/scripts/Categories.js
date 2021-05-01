import { STORE } from "./Store.js";

export default function Categories(parentSelector) {
  this.parentSelector = parentSelector;
  this.parentElement = document.querySelector(parentSelector);
  this.toString = function () {
    return `
            <div class="js-categories-container categories__list"></div>
        `;
  };
}

Categories.prototype.generateProducts = function (parentSelector) {
  const container = this.parentElement.querySelector(parentSelector);
  const products = STORE.categories.map((product) => {
    return `
            <a class="categories__item">${product.name}</a>
        `;
  });
  container.innerHTML = products.join("");
  return products;
};

Categories.prototype.render = function () {
  this.parentElement = document.querySelector(this.parentSelector);
  this.parentElement.innerHTML = this;

  const categories = this.generateProducts(".js-categories-container");
};
