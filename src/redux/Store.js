import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from "./ThemeReducer";

export default configureStore({
  reducer: ThemeReducer,
});
