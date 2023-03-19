import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import imageSlice from "./imageSlice";

export const imagesRedcuer = combineReducers({
    imagesSlice: imageSlice
})
export const store = configureStore(
    {
        reducer: imagesRedcuer
    }
)