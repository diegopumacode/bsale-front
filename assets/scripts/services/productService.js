import { apiFetch, BASE_URL } from "./apiFetch.js";

function ProductService() {
  if (!ProductService.instance) {
    ProductService.instance = this;
  }
  return ProductService.instance;
}

ProductService.prototype.all = () =>
  apiFetch(`${BASE_URL}/product`, {
    method: "GET",
});

ProductService.prototype.byCategory = (id) =>
  apiFetch(`${BASE_URL}/product/category/${id}`, {
    method: "GET",
});

ProductService.prototype.byName = (name) =>
  apiFetch(`${BASE_URL}/product/search/${name}`, {
    method: "GET",
});

export default ProductService;