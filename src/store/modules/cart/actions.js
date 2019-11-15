export function addToCartRequest(id) {
  return {
    type: '@cart/Add_Request',
    id,
  };
}
export function addToCartSuccess(product) {
  return {
    type: '@cart/Add_Success',
    product,
  };
}

export function removeToCart(id) {
  return {
    type: '@cart/Remove',
    id,
  };
}

export function updadeAmountRequest(id, amount) {
  return {
    type: '@cart/Update_amount_Request',
    id,
    amount,
  };
}
export function updadeAmountSuccess(id, amount) {
  return {
    type: '@cart/Update_amount_Success',
    id,
    amount,
  };
}
