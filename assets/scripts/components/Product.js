import Car from "../Car.js";
import Products from "../Products.js";
import ProductService from "../services/productService.js";
import { STORE } from "../Store.js";

export default function Product(parentSelector, productData) {
  this.parentSelector = parentSelector;
  this.parentElement = document.querySelector(parentSelector);
  this.data = productData;
  this.toString = function () {
    return `
    <div class="product">
        <img class="product__img" src="${
          this.data.url_image ||
          "https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg"
        }"/>
        <p class="product__price">$${this.data.price / 100}</p>
        ${
          this.data.discount
            ? `
            <p class="product__discount">${this.data.discount}% de descuento</p>
            <div class="product__content">
                <p class="product__name">${this.data.name}</p>
                <button class="btn-cart js-cart-${this.data.id}">Agregar al carrito</button>
            </div>`
            : `<div class="product__content">
                <p class="product__name">${this.data.name}</p>
                <button class="btn-cart js-cart-${this.data.id}">Agregar al carrito</button>
            </div>`
        }
    </div>
    `;
  };
}

Product.prototype.addEventListeners = function () {
  this.listenCart();
};

Product.prototype.listenCart = function () {
  const productElement = this.parentElement.querySelector(
    `.js-cart-${this.data.id}`
  );
  productElement.addEventListener("click", async (e) => {
    const car = new Car(".js-actions");
    let itemsCart = STORE.shoppingCart;
    if (itemsCart.length > 0) {
      let findItem = STORE.shoppingCart.find((item) => item.id == this.data.id);
      if (findItem) {
        
        findItem.count += 1;
      } else {
        itemsCart.push({ ...this.data, count: 1 });
      }
    } else {
      itemsCart.push({ ...this.data, count: 1 });
    }
    car.render();
  });
};
