import {
  USER_GET_DATA_SUCCESS,
  USER_GET_DATA_REQUEST,
  USER_GET_DATA_FAIL,
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
    default:
      return state;
  }
}

export { todoDataReducer };
