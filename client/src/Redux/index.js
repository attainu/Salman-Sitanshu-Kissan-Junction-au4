import { combineReducers } from "redux";
import ping from './notification';
import user from './userInfo';
const rootReducer = combineReducers({
  notify: ping,
  user: user
});

export default rootReducer;