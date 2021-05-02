import Car from "./assets/scripts/Car.js";
import Categories from "./assets/scripts/Categories.js";
import Products from "./assets/scripts/Products.js";
import Search from "./assets/scripts/Search.js";
import CategoryService from "./assets/scripts/services/categoryService.js";
import ProductService from "./assets/scripts/services/productService.js";
import { STORE } from "./assets/scripts/Store.js";

async function init(){

    const productService = new ProductService()
    const categoryService = new CategoryService()

    const products = new Products(".js-content")
    const categories = new Categories(".js-categories")
    const car = new Car(".js-actions")
    const search = new Search(".js-search")

    STORE.categories = await categoryService.all()
    STORE.products = await productService.all()

    STORE.shoppingCart= JSON.parse(localStorage.getItem("car")) || []

    products.render()
    categories.render()
    car.render()
    search.render()
}

init();