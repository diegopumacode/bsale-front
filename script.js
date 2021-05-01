import Products from "./assets/scripts/Products.js";

function init(){
    const products = new Products(".js-content")
    products.render()
}

init();