import { combineReducers } from "redux";
import { productsReducer } from "./products.js";

const reducers = combineReducers({
  products: productsReducer,
});

export default reducers;