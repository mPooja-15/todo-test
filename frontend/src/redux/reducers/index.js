import { combineReducers } from 'redux';
import { todoDataReducer } from './todo';

export const rootReducer = combineReducers({
    todoDataReducer: todoDataReducer,
});
