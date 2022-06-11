import {combineReducers} from 'redux';
import amoutReducer from "./amountReducer"
 
const reducers = combineReducers ({
     amount:amoutReducer
})
export default reducers