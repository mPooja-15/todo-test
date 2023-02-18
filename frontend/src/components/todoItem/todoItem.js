import React, { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { createTodoApi } from "../../redux/actions/todo";
import CheckButton from "../common/checkbox/checkbox";
import TodoModal from "../common/modal/modal";
import { useDispatch, useSelector } from "react-redux";

function TodoItem({ todo }) {
  const [checked, setChecked] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  
  //   useEffect(() => {
  //     if (todo.status === 'complete') {
  //       setChecked(true);
  //     } else {
  //       setChecked(false);
  //     }
  //   }, [todo.status]);

  //   const handleCheck = () => {
  //     setChecked(!checked);
  //     dispatch(
  //       updateTodo({ ...todo, status: checked ? 'incomplete' : 'complete' })
  //     );
  //   };

  //   const handleDelete = () => {
  //     dispatch(deleteTodo(todo.id));
  //     toast.success('Todo Deleted Successfully');
  //   };

  //   const handleUpdate = () => {
  //     setUpdateModalOpen(true);
  //   };

  return (
    <>
      <div className="todo-item-sub">
        <CheckButton checked={checked} />
        <div>
          <p>hello todo</p>
          <p>12 feb</p>
        </div>
      </div>
      <div className="todo-item-sub">
        <div tabIndex={0} role="button" className="btn-svg">
          <MdDelete />
        </div>
        <div
          tabIndex={0}
          role="button"
          onClick={() => setUpdateModalOpen(true)}
          className="btn-svg"
        >
          <MdEdit />
        </div>
      </div>
      <TodoModal
        type="update"
        modalOpen={updateModalOpen}
        setModalOpen={setUpdateModalOpen}
        todo={todo}
      />
    </>
  );
}

export default TodoItem;
