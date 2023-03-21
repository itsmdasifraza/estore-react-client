const intialState = [];

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case "SET_PRODUCTS":
      return payload;
    default:
      return state;
  }
};