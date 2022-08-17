import axios from "axios";
import { apiUrl } from "../../config/constants";
import { postFetchedSuccess, startLoading } from "./slice";

export const fetchPosts = () => async (dispatch, getState) => {
  try {
    dispatch(startLoading());
    // 1. Going to Redux state and check length of posts
    const offset = getState().feed.posts.length;
    // 2. Add offset and limit to the URL
    const response = await axios.get(
      `${apiUrl}/posts?offset=${offset}&limit=5`
    );
    console.log(response.data.rows);
    dispatch(postFetchedSuccess(response.data.rows));
  } catch (e) {
    console.log(e.message);
  }
};
