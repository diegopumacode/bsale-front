import Product from "./components/Product.js";
import { STORE } from "./Store.js";

export default function Products(parentSelector) {
  this.parentSelector = parentSelector;
  this.parentElement = document.querySelector(parentSelector);
  this.toString = function () {
    return `
            <div class="js-products-container products"></div>
        `;
  };
}

Products.prototype.generateProducts = function (parentSelector) {
  console.log(this.parentElement);
  const container = this.parentElement.querySelector(parentSelector);
  const products = STORE.products.map((product) => {
    return new Product(parentSelector, product);
  });

  

  container.innerHTML = products.join("");
  if (products.length == 0) {
    
    container.innerHTML = `<p>No existen productos por ahora</p>`
  }
  return products;
};

Products.prototype.render = function () {
  this.parentElement = document.querySelector(this.parentSelector);
  this.parentElement.innerHTML = this;

  const products = this.generateProducts(".js-products-container");
  products.forEach(product=>{
      product.addEventListeners()
  })
};
