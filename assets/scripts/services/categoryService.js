import { apiFetch, BASE_URL } from "./apiFetch.js";

function CategoryService() {
  if (!CategoryService.instance) {
    CategoryService.instance = this;
  }
  return CategoryService.instance;
}

CategoryService.prototype.all = () =>
  apiFetch(`${BASE_URL}/category`, {
    method: "GET",
  });

export default CategoryService;
