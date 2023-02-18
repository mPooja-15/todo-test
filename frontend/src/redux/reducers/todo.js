import {
  USER_GET_DATA_SUCCESS,
  USER_GET_DATA_FAIL,
  USER_ALL_DATA_SUCCESS,
  USER_ALL_DATA_FAIL,
  USER_UPDATE_DATA_SUCCESS,
  USER_UPDATE_DATA_FAIL,
} from "../types";
const initialState = {
  todoData: [],
  error: "",
};
function todoDataReducer(state = initialState, action) {
  switch (action.type) {
    case USER_GET_DATA_SUCCESS:
      return { ...state, todoData: action.payload };
    case USER_GET_DATA_FAIL:
      return {
        ...state,
        todoData: [],
        error: action?.payload?.response?.data?.error,
      };
    case USER_ALL_DATA_SUCCESS:
      return { ...state, todoData: action.payload };
    case USER_ALL_DATA_FAIL:
      return {
        ...state,
        todoData: [],
        error: action?.payload?.response?.data?.error,
      };
    case USER_UPDATE_DATA_SUCCESS:
      return { ...state, todoData: action.payload };
    case USER_UPDATE_DATA_FAIL:
      return {
        ...state,
        todoData: [],
        error: action?.payload?.response?.data?.error,
      };
    default:
      return state;
  }
}

export { todoDataReducer };
