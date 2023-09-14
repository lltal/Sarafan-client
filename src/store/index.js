import {combineReducers, createStore} from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import { composeWithDevTools } from "redux-devtools-extension";


const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer
})

export const store = createStore(rootReducer, composeWithDevTools())