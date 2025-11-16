import { combineReducers } from "redux";
import {auth} from "./authReducer"
import { profile } from "./profileReducer";
import { todoSlice } from "./todoReducer";

export const rootReducer= combineReducers({
    auth:auth.reducer,
    profile:profile.reducer,
    todo: todoSlice.reducer
})