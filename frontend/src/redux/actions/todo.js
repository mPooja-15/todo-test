import axios from "axios";
import {
  USER_GET_DATA_SUCCESS,
  USER_GET_DATA_FAIL,
  USER_ALL_DATA_SUCCESS,
  USER_ALL_DATA_FAIL,
  USER_UPDATE_DATA_SUCCESS,
  USER_UPDATE_DATA_FAIL,
} from "../types";

const base_url = `http://localhost:5151/user`;

export function createTodoApi(task_name, iscomplate) {
  return (dispatch) => {
    const data = {
      task_name: task_name,
      iscomplate: iscomplate == "complete" ? true : false,
    };
    console.log(data);
    axios
      .post(`${base_url}/create`, data)
      .then((json) => {
        console.log(json);
        dispatch({
          type: USER_GET_DATA_SUCCESS,
          payload: {
            todoData: json?.data,
          },
        });
      })
      .catch((err) => {
        console.log(err, "errerr");
        dispatch({
          type: USER_GET_DATA_FAIL,
          payload: {
            error: err,
          },
        });
      });
  };
}
export function updateTodoApi(task_name, iscomplate, _id) {
  return (dispatch) => {
    const data = {
      task_name: task_name,
      iscomplate: iscomplate == "complete" ? true : false,
    };
    axios
      .post(`${base_url}/update/${_id}`, data)
      .then((json) => {
        dispatch({
          type: USER_UPDATE_DATA_SUCCESS,
          payload: {
            todoData: json?.data,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: USER_UPDATE_DATA_FAIL,
          payload: {
            error: err,
          },
        });
      });
  };
}
export function fetchAllTodoData() {
  return (dispatch) => {
    axios
      .get(`${base_url}/find`)
      .then((json) => {
        dispatch({
          type: USER_ALL_DATA_SUCCESS,
          payload: json?.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: USER_ALL_DATA_FAIL,
          error: err,
        });
      });
  };
}
