import { server } from "../store";
import axios from "axios";

export const contactUs = (name, email, message, phone) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
      withCredentials: true,
    };

    dispatch({ type: "contactRequest" });

    const { data } = await axios.post(
      `${server}/contact`,
      { name, email, message, phone },
      config
    );

    dispatch({ type: "contactSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "contactFail",
      payload: error.response.data.message,
    });
  }
};
export const webinar = (name, email, phone, message) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
      withCredentials: true,
    };

    dispatch({ type: "webinarRequest" });

    const { data } = await axios.post(
      `${server}/webinar`,
      { name, email, message, phone },
      config
    );

    dispatch({ type: "webinarSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "webinarFail",
      payload: error.response.data.message,
    });
  }
};

export const courseRequest = (name, email, course) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
      withCredentials: true,
    };

    dispatch({ type: "courseRequestRequest" });

    const { data } = await axios.post(
      `${server}/courserequest`,
      { name, email, course },
      config
    );

    dispatch({ type: "courseRequestSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "courseRequestFail",
      payload: error.response.data.message,
    });
  }
};
