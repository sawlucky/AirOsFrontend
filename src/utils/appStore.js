import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import countUserReducer from "./countUserSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    countUser: countUserReducer,
  },
});
export default appStore;
