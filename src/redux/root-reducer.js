import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import storage from "redux-persist/lib/storage";
import directoryRecuer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryRecuer,
  shop: shopReducer,
});
export default persistReducer(persistConfig, rootReducer);
