import { createSlice } from "@reduxjs/toolkit";
const countUserSlice = createSlice({
  name: "countUser",
  initialState: {
    count: 0,
  },
  reducers: {
    addCount: (state, action) => {
      state.count = action.payload;
    },
  },
});
export const { addCount } = countUserSlice.actions;
export default countUserSlice.reducer;
