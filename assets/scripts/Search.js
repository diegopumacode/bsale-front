import Category from "./components/Category.js";
import Products from "./Products.js";
import ProductService from "./services/productService.js";
import { STORE } from "./Store.js";

export default function Search(parentSelector) {
  this.parentSelector = parentSelector;
  this.parentElement = document.querySelector(parentSelector);
  this.toString = function () {
    return `
          <form id="js-form">
            <input name="name" class="search__box" />
            <button type="submit" class="search__action">Buscar</button>
          </form>
        `;
  };
}

Search.prototype.render = function () {
  this.parentElement = document.querySelector(this.parentSelector);
  this.parentElement.innerHTML = this;
  const form = document.getElementById('js-form');

  form.addEventListener('submit', async (e)=>{
    e.preventDefault()

    const productService = new ProductService()
    const productView = new Products(".js-content");

    let {name} = e.target
    console.log(name.value.length)
    let products = []
    if(name.value.length == ""){
      products = await productService.all()
    }else{
      products = await productService.byName(name.value)
    }
    
    STORE.products = products
    productView.render()
  })

  //   const carElement = this.parentElement.querySelector(`.js-car-show`);
  //   carElement.addEventListener("click", async (e) => {
  //     console.log("ra")
  //   })
};
