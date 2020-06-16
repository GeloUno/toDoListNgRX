import { ToDoItem } from './../models/todo-item.model';
import { ToDoAction, ToDoActionTypes } from '../actions/todo.actions';
import { v4 as uuid } from 'uuid';
import { ToDoItemState } from './../models/todo-item-state.model';
import { flatMap } from 'rxjs/operators';

const initialState: ToDoItemState = {
  list: [
    {
      id: uuid(),
      name: 'zakupy',
    },
    {
      id: uuid(),
      name: 'spacer',
    },
  ],
  connecting: false,
  error: undefined,
};

// TODO: chceck error should be every where in state TODO: connectin sussecc and then falure
// TODO: if we have falure connection state will stay or state will be clean
export function ToDoReducer(
  state: ToDoItemState = initialState,
  action: ToDoAction
) {
  switch (action.type) {
    case ToDoActionTypes.ADD_TODO_ITEM:
      return {
        ...state,
        connecting: true,
        error: undefined,
      };
    case ToDoActionTypes.ADD_TODO_FALURE:
      return {
        ...state,
        connecting: false,
        error: action.payload,
      };
    case ToDoActionTypes.ADD_TODO_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        connecting: false,
        error: undefined,
      };

    case ToDoActionTypes.LOAD_TODO_ITEM:
      return {
        ...state,
        connecting: true,
        error: undefined,
      };
    case ToDoActionTypes.LOAD_TODO_FALURE:
      return {
        ...state,
        connecting: false,
        error: action.payload,
      };
    case ToDoActionTypes.LOAD_TODO_SUCCESS:
      return {
        ...state,
        list: action.payload,
        connecting: false,
        error: undefined,
      };

    case ToDoActionTypes.DELETE_TODO_ITEM:
      return {
        ...state,
        connecting: true,
        error: undefined,
      };
    case ToDoActionTypes.DELETE_TODO_FALURE:
      return {
        ...state,
        connecting: false,
        error: action.payload,
      };
    case ToDoActionTypes.DELETE_TODO_SUCCESS:
      return {
        ...state,
        connecting: false,
        error: undefined,
        list: state.list.filter((data) => {
          return data.id !== action.payload;
        }),
      };

    default:
      return state;
  }
}
