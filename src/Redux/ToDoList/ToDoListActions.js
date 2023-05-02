import { ADD_TODO_ITEM, REMOVE_TODO_ITEM, UPDATE_TODO_ITEM, REMOVE_ALL } from "./ActionTypes";

export const addToDoListItem = (payload) =>{
    return{
        type: ADD_TODO_ITEM,
        payload: payload
    }
}


export const removeToDoListItem = (payload) =>{
    return {
        type: REMOVE_TODO_ITEM,
        payload: payload
    }
}


export const editToDoListItem = (payload) =>{
    return {
        type: UPDATE_TODO_ITEM,
        payload: payload
    }
}

export const removeAllToDoListItem = () =>{
    return {
        type: REMOVE_ALL
    }
}