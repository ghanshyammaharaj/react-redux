import { applyMiddleware,createStore } from "redux";
import  thunk from 'redux-thunk'
//import reducers from "./reducers";
import reducer from "./reducers";
export const store = createStore(reducer, {}, applyMiddleware(thunk))