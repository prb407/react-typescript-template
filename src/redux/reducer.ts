import { combineReducers } from "redux";
import { todoReducer } from "./todo/reducer";
import { userReducer } from "./user/reducer";

export const rootReducer = combineReducers({
    todo: todoReducer,
    user: userReducer
})
