import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name: 'countSlice',
    initialState: {
        count: 0,
    },
    reducers: {
        changeCount(state, action){
            state.count = action.payload;
        }
    }
})
export default countSlice.reducer;
export const {changeCount} = countSlice.actions;