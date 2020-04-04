import { combineReducers } from "redux";
import data from './notification';
const rootReducer = combineReducers({
  notify: data,
});

export default rootReducer;