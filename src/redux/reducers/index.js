import { combineReducers } from "redux";
import postReducers from "./post.reducer";
const index = combineReducers({
  postResult: postReducers,
});

export default index;
