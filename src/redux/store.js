import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./features/appSlice/appSlice";
import chatReducer from "./features/chatSlice/chatSlice";
const store = configureStore({
  reducer: {
    app: appReducer,
    chat: chatReducer,
  },
});
export default store;
