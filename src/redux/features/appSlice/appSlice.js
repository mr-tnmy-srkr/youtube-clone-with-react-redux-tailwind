import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: true,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.open = !state.open;
    },
  },
});

export const { toggleSidebar } = appSlice.actions;
export default appSlice.reducer;
