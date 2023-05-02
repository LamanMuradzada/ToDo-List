import {createStore} from 'redux';
import ToDoReduser from './ToDoList/ToDoReducer';

export const store  = createStore(ToDoReduser);