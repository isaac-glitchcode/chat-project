import { createStore, combineReducers} from "redux";
// import logger from "redux-logger"; applyMiddleware 
import ChatReducer from "./chat/reducer";

const store = createStore(
  combineReducers({ ChatReducer }),
//   applyMiddleware(logger)
);
console.log("estado:", store.getState())
export default store;