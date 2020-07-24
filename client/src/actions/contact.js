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
import api from "../utils/api";

export const getContacts = () => async (dispatch) => {
  try {
    const res = await api.get("/contacts");
    console.log("res :", res.data);

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

export const addContact = (contact) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await api.post("/contacts", contact, config);

    console.log("res :", res.data);

    dispatch({
      type: ADD_CONTACT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CONTACT_ERROR,
      payload: err.response.msg,
    });
  }
};
// Delete Contact
export const deleteContact = (id) => async (dispatch) => {
  try {
    await api.delete(`/contacts/${id}`);

    dispatch({
      type: DELETE_CONTACT,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: CONTACT_ERROR,
      payload: err.response.msg,
    });
  }
};

// Update Contact
export const updateContact = (contact) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await api.put(`/contacts/${contact._id}`, contact, config);

    dispatch({
      type: UPDATE_CONTACT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CONTACT_ERROR,
      payload: err.response.msg,
    });
  }
};

// Clear Contacts
export const clearContacts = () => (dispatch) => {
  dispatch({ type: CLEAR_CONTACTS });
};

// Set Current Contact
export const setCurrent = (contact) => (dispatch) => {
  dispatch({ type: SET_CURRENT, payload: contact });
};

// Clear Current Contact
export const clearCurrent = () => (dispatch) => {
  dispatch({ type: CLEAR_CURRENT });
};

// Filter Contacts
export const filterContacts = (text) => (dispatch) => {
  dispatch({ type: FILTER_CONTACTS, payload: text });
};

// Clear Filter
export const clearFilter = () => (dispatch) => {
  dispatch({ type: CLEAR_FILTER });
};
