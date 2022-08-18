import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  me: null, // this is the logged in user
  accessToken: null,
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    startLoadingAuth: (state) => {
      state.loading = true;
    },
    loggedIn: (state, action) => {
      console.log("Logged in action", action);
      state.me = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.loading = false;
    },
  },
});

export const { startLoadingAuth, loggedIn } = authSlice.actions;
export default authSlice.reducer;
