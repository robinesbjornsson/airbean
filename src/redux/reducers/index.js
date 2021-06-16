import { combineReducers } from "redux";
import { productReducer, addProductReducer, openCart, userReducer, currentUserReducer, orderReducer } from "./reducerCollection";



const reducers = combineReducers({
  allProducts: productReducer,
  addProduct: addProductReducer,
  open: openCart,
  userReducer: userReducer,
  currentUserReducer: currentUserReducer,
  orderReducer: orderReducer,

});

export default reducers;