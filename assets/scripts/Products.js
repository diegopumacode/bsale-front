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

Products.prototype.generateProducts = function(parentSelector){
    console.log(this.parentElement)
    const container = this.parentElement.querySelector(parentSelector);
    console.log(container)
    const products = STORE.products.map(product=>{
        return `
            <div class="product">
                <img class="product__img" src="https://static.wixstatic.com/media/023392_89f56f6b8adf48f783626cf58fa5b08d.png"/>
                <p class="product__price">$12.5</p>
                <div class="product__content">
                    <p class="product__name">${product.name}</p>
                    <button class="btn-cart">Agregar al carrito</button>
                </div>
            </div>
        `
    })
    container.innerHTML  = products.join('');
    return products;
}

Products.prototype.render = function(){
    this.parentElement = document.querySelector(this.parentSelector);
    this.parentElement.innerHTML = this;

    const products = this.generateProducts('.js-products-container');
}