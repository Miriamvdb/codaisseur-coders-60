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

    postFetchedSuccess: (state, action) => {
      console.log("Post fetched success: ", action);
      state.posts = action.payload;
      state.loading = false;
    },
  },
});

export const { startLoading, postFetchedSuccess } = feedSlice.actions;
export default feedSlice.reducer;
