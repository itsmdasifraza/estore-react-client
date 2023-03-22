const intialState = [];

const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case "SET_PRODUCTS":
      localStorage.setItem("products", JSON.stringify(payload));
      return payload;
    case "ADD_TO_CART_PRODUCT":
      state.forEach((elem) => {
        if (elem.id === payload) {
          elem.presentInCart = true;
        }
      });
      // console.log("add to cart", state);
      localStorage.setItem("products", JSON.stringify(state));
      return state;
    case "REMOVE_FROM_CART_PRODUCT":
      state.forEach((elem) => {
        if (elem.id === payload) {
          elem.presentInCart = false;
        }
      });
      // console.log("remove from cart", state);
      localStorage.setItem("products", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};

export default productsReducer;