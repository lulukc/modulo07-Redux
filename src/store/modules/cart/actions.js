export function addToCart(product) {
  return {
    type: '@cart/Add',
    product,
  };
}

export function removeToCart(id) {
  return {
    type: '@cart/Remove',
    id,
  };
}

export function updadeAmount(id, amount) {
  return {
    type: '@cart/Update_amount',
    id,
    amount,
  };
}
