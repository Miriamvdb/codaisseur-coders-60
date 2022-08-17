import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  posts: [],
};

export const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },

    postFetchedSucces: (state, action) => {
      console.log("Post fetched success: ", action);
      state.loading = false;
    },
  },
});

export const { startLoading, postFetchedSucces } = feedSlice.actions;
export default feedSlice.reducer;
