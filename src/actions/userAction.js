import axios from "axios";

export const GET_USERS_LIST = "GET_USERS_LIST";
export const GET_USER_DETAIL = "GET_USER_DETAIL";
export const POST_USER_CREATE = "POST_USER_CREATE";
export const PUT_USER_UPDATE = "PUT_USER_UPDATE";

export function getUsersList() {
  return (dispatch) => {
    axios
      .get("http://localhost:8000/users")
      .then((res) => {
        dispatch({
          type: "GET_USERS_LIST",
          payload: { data: res.data, errorMessage: false },
        });
      })
      .catch((err) => {
        dispatch({
          type: "GET_USERS_LIST",
          payload: { data: false, errorMessage: err.message },
        });
      });
  };
}

export function getUserDetail(id) {
  return (dispatch) => {
    axios
      .get(`http://localhost:8000/users/${id}`)
      .then((res) => {
        dispatch({
          type: "GET_USER_DETAIL",
          payload: { data: res.data, errorMessage: false },
        });
      })
      .catch((err) => {
        dispatch({
          type: "GET_USER_DETAIL",
          payload: { data: false, errorMessage: err.message },
        });
      });
  };
}

export function postUserCreate(data) {
  return (dispatch) => {
    axios
      .post("http://localhost:8000/users", data)
      .then((res) => {
        dispatch({
          type: "POST_USER_CREATE",
          payload: { data: res.data, errorMessage: false },
        });
      })
      .catch((err) => {
        dispatch({
          type: "POST_USER_CREATE",
          payload: { data: false, errorMessage: err.message },
        });
      });
  };
}

export function putUserUpadata(data, id) {
  return (dispatch) => {
    axios
      .put(`http://localhost:8000/users/${id}`, data)
      .then((res) => {
        dispatch({
          type: "PUT_USER_UPDATE",
          payload: { data: res.data, errorMessage: false },
        });
      })
      .catch((err) => {
        dispatch({
          type: "PUT_USER_UPDATE",
          payload: { data: false, errorMessage: err.message },
        });
      });
  };
}

export function deleteUserId(id) {
  return () => {
    axios
      .delete(`http://localhost:8000/users/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function deleteUser() {
  return (dispatch) => {
    dispatch({
      type: "GET_USER_DETAIL",
      payload: { data: false, errorMessage: false },
    });
  };
}
