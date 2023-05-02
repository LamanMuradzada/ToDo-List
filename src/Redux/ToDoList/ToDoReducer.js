import {
    ADD_TODO_ITEM,
    REMOVE_ALL,
    REMOVE_TODO_ITEM,
    UPDATE_TODO_ITEM,
  } from "./ActionTypes";

  let initialState = {
    items: [],
  };



  const ToDoReducer = (state = initialState, action) =>{
       switch (action.type) {
        case ADD_TODO_ITEM:
            return {
                ...state,
                items: [
                    ...state.items,
                    { id: action.payload.id, name: action.payload.item},
                ],
            };

            case UPDATE_TODO_ITEM:
                state.items.map(item =>{
                    if(item.id === action.payload.id){
                        item.name = action.payload.item
                    }
                })

                let newItems = state.items

                return {
                    items: newItems
                };

                case REMOVE_TODO_ITEM:
                    return {
                        items: state.items.filter((item) => item.id !== action.payload.id),
                    };

                    case REMOVE_ALL:
                        return {
                            items: [],
                        };

                        default:
                            return state;
       }
  };

  export default ToDoReducer;