import { createSlice } from "@reduxjs/toolkit";

export const imageSlice = createSlice({
  name: "imageSlice",
  initialState: { images: [] },
  reducers: {
    addImage(state, action) {
      state.images.unshift(action.payload);
    },
  },
});
export default imageSlice.reducer;
export const { addImage } = imageSlice.actions;
