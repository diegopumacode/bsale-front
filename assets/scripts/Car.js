import Category from "./components/Category.js";
import { STORE } from "./Store.js";
import { totalCheckout } from "./utils/total.js";

export default function Car(parentSelector) {
  this.parentSelector = parentSelector;
  this.parentElement = document.querySelector(parentSelector);
  this.toString = function () {
    return `
            <a class="cart js-car-show"><i class="fas fa-shopping-cart"></i>${
              STORE.shoppingCart.length
            }</a>

            <div id="myModal" class="modal">
              <div class="modal-content">
                <span class="close">&times;</span>
                <h4 class="modal-title">Productos en carrito</h4>
                <p>*Lista de productos actuamente en tu carrito de compras</p>
                <div class="modal-container">
                ${STORE.shoppingCart
                  .map(
                    (product) => `
                    <div class="product-shop">
                    <img src="${
                      product.url_image ||
                      "https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg"
                    }" width="100" height="100"/>
                    <p>${product.name}</p>
                    <p>${product.count} unid.</p>
                    <p>Precio: $${product.price / 100}</p>
                    <p>Total: $${(product.price / 100) * product.count}</p>
                    <a class="remove-car js-remove" data-id=${product.id}>X</a>
                    </div>
                    
                    `
                  )
                  .join("")}
                    <br/>
                    <a class="clear-car js-clear">Limpiar Carrito</a>
                    <h1>Total : $${totalCheckout()}</h1>
                    </div>
              </div>
            </div>
        `;
  };
}

Car.prototype.render = function () {
  this.parentElement = document.querySelector(this.parentSelector);
  this.parentElement.innerHTML = this;

  const carElement = this.parentElement.querySelector(".js-car-show");
  const carClear = this.parentElement.querySelector(".js-clear");
  const carItemRemove = this.parentElement.getElementsByClassName("js-remove");
  console.log(carItemRemove);
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];

  carElement.addEventListener("click", async (e) => {
    modal.style.display = "block";
    span.onclick = function () {
      modal.style.display = "none";
    };
  });

  carClear.addEventListener("click", async (e) => {
    STORE.shoppingCart = [];
    localStorage.setItem("car", JSON.stringify([]));
    this.render();
  });

  for (let item of carItemRemove) {
    item.addEventListener("click",(e)=>{
      console.log(e.target.dataset.id)
      STORE.shoppingCart = STORE.shoppingCart.filter(product => product.id !== +e.target.dataset.id)
      
      localStorage.setItem('car',JSON.stringify(STORE.shoppingCart))
      this.render()
    })
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
};
