import axios from "axios";
import { apiUrl } from "../../config/constants";
import { postDetailsFetchedSuccess, startLoadingPost } from "./slice";

export const fetchPostDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch(startLoadingPost());
    const [postResponse, commentsResponse] = await Promise.all([
      axios.get(`${apiUrl}/posts/${id}`),
      axios.get(`${apiUrl}/posts/${id}/comments`),
    ]);
    console.log("Post response?", postResponse.data);
    console.log("Comments response?", commentsResponse.data);
    dispatch(
      postDetailsFetchedSuccess({
        post: postResponse.data,
        comments: commentsResponse.data.rows,
      })
    );
  } catch (e) {
    console.log(e.message);
  }
};
