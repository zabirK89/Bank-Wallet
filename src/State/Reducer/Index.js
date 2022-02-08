import { combineReducers } from "redux";
import Amountreducer from "./Amountreducer";
import transactionReducer from "./transactionReducer";


const reducers=combineReducers({
    amount :Amountreducer,
    transactions:transactionReducer
})

export default reducers