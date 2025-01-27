import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "./slices/timerSlice";

const store = configureStore({
  reducer: {
    timer: timerReducer,
  },
});

export default store;
