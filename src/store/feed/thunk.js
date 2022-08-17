import axios from "axios";
import { apiUrl } from "../../config/constants";
import { postFetchedSuccess, startLoading } from "./slice";

export const fetchPosts = () => async (dispatch, getState) => {
  try {
    dispatch(startLoading());
    const response = await axios.get(`${apiUrl}/posts`);
    console.log(response.data.rows);
    dispatch(postFetchedSuccess(response.data.rows));
  } catch (e) {
    console.log(e.message);
  }
};
