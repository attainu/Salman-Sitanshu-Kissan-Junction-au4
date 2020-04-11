import { combineReducers } from "redux";
import ping from "./notification";
import user from "./userInfo";
import productList from "./productlist";
const rootReducer = combineReducers({
  notify: ping,
  user: user,
  productList: productList,
});

export default rootReducer;
