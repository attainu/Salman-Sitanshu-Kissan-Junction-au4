import { combineReducers } from "redux";
import ping from "./notification";
import user from "./userInfo";
import productList from "./productlist";
import error from "./formValidation";

const rootReducer = combineReducers({
  notify: ping,
  user: user,
  productList: productList,
  formError: error
});

export default rootReducer;
