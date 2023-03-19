import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import countSlice from "./countSlice";

export const countReducer = combineReducers({
    countSlice: countSlice
})
export const store = configureStore(
    {
        reducer: countReducer
    }
)