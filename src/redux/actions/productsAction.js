const setProducts = (products) => {
  return {
    type: "SET_PRODUCTS",
    payload: products,
  };
};
const addToCartProduct = (id) => {
  return {
    type: "ADD_TO_CART_PRODUCT",
    payload: id,
  };
};
const removeFromCartProduct = (id) => {
  return {
    type: "REMOVE_FROM_CART_PRODUCT",
    payload: id,
  };
};
export {setProducts, addToCartProduct, removeFromCartProduct};