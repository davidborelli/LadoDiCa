export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    payload: { id },
  };
}

export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    payload: { product },
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE',
    payload: { id },
  };
}

export function updateAmountRequest(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    payload: { id, amount },
  };
}

export function updateAmountSuccess(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCCESS',
    payload: { id, amount },
  };
}

export function addCuponDiscountCartRequest(name) {
  return {
    type: '@cart/ADD_CUPON_DISCOUNT_CART_REQUEST',
    payload: name,
  };
}

export function addCuponDiscountCartSuccess(coupon) {
  return {
    type: '@cart/ADD_CUPON_DISCOUNT_CART_SUCCESS',
    payload: coupon,
  };
}

export function openCloseModal() {
  return {
    type: '@cart/OPEN_CLOSE_MODAL',
  };
}

export function cleanCart() {
  return {
    type: '@cart/CLEAN_CART',
  };
}
