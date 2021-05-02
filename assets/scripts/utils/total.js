import { STORE } from "../Store.js";

export function totalCheckout() {
  return (
    Math.round(
      STORE.shoppingCart
        .map((product) => {
          return { total: product.count * (product.price / 100) };
        })
        .reduce((a, b) => a + +b.total, 0) * 100
    ) / 100
  );
}
