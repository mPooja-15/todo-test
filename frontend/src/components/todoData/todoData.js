import React from 'react';
import TodoItem from '../todoItem/todoItem';

function AppContent() {
    // const todoList = useSelector((state) => state.todo.todoList);
    // const filterStatus = useSelector((state) => state.todo.filterStatus);

    // const sortedTodoList = [...todoList];
    // sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

    // const filteredTodoList = sortedTodoList.filter((item) => {
    //     if (filterStatus === 'all') {
    //         return true;
    //     }
    //     return item.status === filterStatus;
    // });

    return (
        <div className="todo-item-main">
            <TodoItem key={"1"} todo={"todo"} />
            {/* {
                <>
                    {[].map((todo) => (
                        // <motion.div key={todo.id} variants={child}>
                       
                        // </motion.div>
                    ))}
                </>   */}
            {/* <div>
                        No Todos
                    </div> */}
        </div>
    );
}

export default AppContent;
