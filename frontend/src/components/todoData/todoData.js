import React from 'react';
import TodoItem from '../todoItem/todoItem';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { fetchAllTodoData } from '../../redux/actions/todo';

function AppContent() {
    const dispatch = useDispatch()
    const { todoData } = useSelector(data => data?.todoDataReducer)
    console.log(todoData, "todoDatatodoData")
    useEffect(() => {
        dispatch(fetchAllTodoData())
    }, [])
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

        <>

            {
                todoData?.Data?.map((data,index) => {
                    return (
                        <div className="todo-item-main">
                            <TodoItem key={index} todo={data} />
                        </div>
                    )
                })


            }

        </>

    );
}

export default AppContent;
