import axios from "axios";
import { apiUrl } from "../../config/constants";
import { loggedIn, startLoadingAuth } from "./slice";

export const login = (email, password) => async (dispatch, getState) => {
  try {
    dispatch(startLoadingAuth());
    const response = await axios.post(`${apiUrl}/login`, {
      email,
      password,
    });
    console.log(response.data);
    dispatch(loggedIn(response.data));
  } catch (e) {
    console.log(e.message);
  }
};
