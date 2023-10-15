import {combineReducers, createStore} from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import chatReducer from "./chatReducer";


const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    chat: chatReducer
})

export const store = createStore(rootReducer, composeWithDevTools())