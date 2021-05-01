import Category from "./components/Category.js";
import { STORE } from "./Store.js";

export default function Car(parentSelector) {
  this.parentSelector = parentSelector;
  this.parentElement = document.querySelector(parentSelector);
  this.toString = function () {
    return `
            <a class="cart js-car-show"><i class="fas fa-shopping-cart"></i>${STORE.shoppingCart.length}</a>
        `;
  };
}

Car.prototype.render = function () {
  this.parentElement = document.querySelector(this.parentSelector);
  this.parentElement.innerHTML = this;

  const carElement = this.parentElement.querySelector(`.js-car-show`);
  carElement.addEventListener("click", async (e) => {
    console.log("ra")
  })
};
