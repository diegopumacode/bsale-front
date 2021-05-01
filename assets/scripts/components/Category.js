import Categories from "../Categories.js";
import Products from "../Products.js";
import ProductService from "../services/productService.js";
import { STORE } from "../Store.js";

export default function Category(parentSelector, categoryData) {
  this.parentSelector = parentSelector;
  this.parentElement = document.querySelector(parentSelector);
  this.data = categoryData;
  this.toString = function () {
    return `
    <a class="categories__item js-category-${this.data.id} ${this.data.id === STORE.categorySelect ? "select-category" : ""}">${this.data.name}</a>
    `;
  };
}

Category.prototype.addEventListeners = function () {
  this.listenCategory()
};

Category.prototype.listenCategory = function(){
    const categoryElement = this.parentElement.querySelector(`.js-category-${this.data.id}`);
    categoryElement.addEventListener("click",async (e)=>{
        console.log("click" + this.data.id)
        const productService = new ProductService()
        const productByCategory = await productService.byCategory(this.data.id);
        STORE.products = productByCategory;
        STORE.categorySelect = this.data.id
        const productsView = new Products(".js-content")
        const categoriesView = new Categories(".js-categories")
        productsView.render()
        categoriesView.render()
        

    })
}
