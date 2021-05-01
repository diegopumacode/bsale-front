import Categories from "./assets/scripts/Categories.js";
import Products from "./assets/scripts/Products.js";

function init(){
    const products = new Products(".js-content")
    const categories = new Categories(".js-categories")
    products.render()
    categories.render()
}

init();