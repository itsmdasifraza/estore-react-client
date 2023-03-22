import { combineReducers } from "redux";
import productsReducer from "./productsReducer.js";

const reducers = combineReducers({
  products: productsReducer,
});

export default reducers;