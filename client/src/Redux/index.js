import { combineReducers } from "redux";
import ping from "./notification";
import user from "./userInfo";
import productList from "./productlist";
import error from "./formValidation";
import blogState from "./blogredux";
const rootReducer = combineReducers({
  notify: ping,
  user: user,
  productList: productList,
  formError: error,
  blogState: blogState,
});

export default rootReducer;
