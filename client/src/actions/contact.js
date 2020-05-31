import axios from "axios";
import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR,
} from "../actions/types";

export const getContacts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/contacts");

    dispatch({
      type: GET_CONTACTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CONTACT_ERROR,
      payload: err.response.msg,
    });
  }
};
