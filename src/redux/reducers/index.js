import { combineReducers } from "redux";
import { productReducer, addProductReducer, openCart, userReducer, currentUserReducer, } from "./productReducer";



const reducers = combineReducers({
  allProducts: productReducer,
  addProduct: addProductReducer,
  openCart: openCart,
  userReducer: userReducer,
  currentUserReducer: currentUserReducer,
});

export default reducers;