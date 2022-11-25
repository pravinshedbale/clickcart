import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productDetailsReducer,
  productListReducer,
} from "./reducers/productReducer";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
} from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";
import { getLocalStorageItem } from "../util/getFromLS";
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
});
const cartItemsFromLS = getLocalStorageItem("cartItems", []);
const userInfoFromLS = getLocalStorageItem("userInfo", null);
const shippingAddressFromLS = getLocalStorageItem("shippingAddress", {});
const initialState = {
  cart: { cartItems: cartItemsFromLS, shippingAddress: shippingAddressFromLS },
  userLogin: { userInfo: userInfoFromLS },
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
