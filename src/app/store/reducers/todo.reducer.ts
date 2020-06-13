import { ToDoItem } from './../models/todo-item.model';
import { ToDoAction, ToDoActionTypes } from '../actions/todo.actions';
import { v4 as uuid } from 'uuid';

const initialState: Array<ToDoItem> = [
  {
    id: uuid(),
    name: 'zakupy stokrotka',
  },
  {
    id: uuid(),
    name: 'zakupy w obi',
  },
];

export function ToDoReducer(
  state: Array<ToDoItem> = initialState,
  action: ToDoAction
) {
  switch (action.type) {
    case ToDoActionTypes.ADD_TODO_ITEM:
      return [...state, action.payload];
    case ToDoActionTypes.DETETE_TODO_ITEM:
      return state.filter((data) => data.id !== action.payload);
    default:
      return state;
  }
}
