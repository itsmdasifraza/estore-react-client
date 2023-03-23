import { combineReducers } from "redux";
import loginReducer from "./loginReducer.js";
import productsReducer from "./productsReducer.js";

const reducers = combineReducers({
  products: productsReducer,
  login: loginReducer
});

export default reducers;