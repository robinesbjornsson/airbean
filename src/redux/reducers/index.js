import { combineReducers } from "redux";
import { productReducer, addProductReducer, openCart,  userReducer, currentUserReducer, orderReducer, } from "./productReducer";



const reducers = combineReducers({
  allProducts: productReducer,
  addProduct: addProductReducer,
  open: openCart,
  userReducer: userReducer,
  currentUserReducer: currentUserReducer,
  order: orderReducer,
 
});

export default reducers;