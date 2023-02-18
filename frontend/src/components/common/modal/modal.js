import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { createTodoApi } from "../../../redux/actions/todo";
import Button from "../button/button";

function TodoModal({ type, modalOpen, setModalOpen, todo }) {
  const dispatch = useDispatch();
  const [task_name, setTaskName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [iscomplate, setIsComplate] = useState("incomplete");
  const { todoData } = useSelector((data) => data.todoDataReducer?.todoData);
  console.log(todoData?.data.message);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTodoApi(task_name, iscomplate));
  };
  useEffect(() => {
    if (todoData?.MSG == "User is not Created") {
      setErrorMsg(todoData?.data?.errors?.task_name?.message);
    }
  }, [todoData?.data.message]);
  console.log(errorMsg,"errorMsgerrorMsg")
  return (
    <>
      {modalOpen && (
        <>
          <Modal show={modalOpen} backdrop="static" keyboard={false}>
            <div className="close-btn">
              <MdOutlineClose onClick={() => setModalOpen(false)} />
            </div>

            <h5>{type === "add" ? "Add" : "Update"} TODO</h5>
            <form onSubmit={(e) => handleSubmit(e)}>
            {errorMsg&&<p>{errorMsg}</p>}
              <div className="form-class">
                <label htmlFor="title">Title</label>
                <input
                  className="select-btn"
                  type="text"
                  id="title"
                  value={task_name}
                  onChange={(e) => setTaskName(e.target.value)}
                />
              </div>
              <div className="form-class">
                <label htmlFor="type">Status</label>
                <select
                  id="type"
                  value={iscomplate}
                  onChange={(e) => setIsComplate(e.target.value)}
                  className="select-btn"
                >
                  <option value="incomplete">Incomplete</option>
                  <option value="complete">Completed</option>
                </select>
              </div>
              <div className="btn-position">
                <Button type="submit" variant="primary">
                  {type === "add" ? "Add Task" : "Update Task"}
                </Button>
                <Button variant="secondary" onClick={() => setModalOpen(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </Modal>
        </>
      )}
    </>
  );
}

export default TodoModal;
