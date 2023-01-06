import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "theme",
  initialState: { theme: "dark", loggedIn: false },
  reducers: {
    toggleTheme: (state, action) => {
      console.log("dispatched");
      if (state.theme === "dark") {
        state.theme = "light";
      } else {
        state.theme = "dark";
      }
    },
    toggleLoggedIn: (state, action) => {
      state.loggedIn = !state.loggedIn;
    },
  },
});
export const { toggleTheme, toggleLoggedIn } = rootSlice.actions;
export default rootSlice.reducer;
