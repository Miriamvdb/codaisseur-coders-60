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

    const { jwt } = response.data;
    console.log(response.data);

    const profileResponse = await axios.get(`${apiUrl}/me`, {
      headers: { authorization: `Bearer ${jwt}` },
    });

    console.log(profileResponse);

    dispatch(loggedIn({ accessToken: jwt, user: profileResponse.data }));
  } catch (e) {
    console.log(e.message);
  }
};
