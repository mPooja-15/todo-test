import axios from "axios";
import { USER_GET_DATA_SUCCESS, USER_GET_DATA_FAIL } from "../types";

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
        console.log(json)
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
// export function fetchApiSingleData(deal_id) {
//   return (dispatch) => {
//     axios
//       .get(`${base_url}/deals/${deal_id}`)
//       .then((json) => {
//         dispatch({
//           type: SINGLE_GET_DATA_SUCCESS,
//           payload: {
//             dealData: json?.data
//           }
//         });
//       })
//       .catch((err) => {
//         dispatch({
//           type: SINGLE_GET_DATA_FAIL,
//           payload: {
//             dealError: err
//           }
//         });
//       });
//   };
// }
