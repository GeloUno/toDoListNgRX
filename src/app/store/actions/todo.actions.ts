import { Action } from '@ngrx/store';
import { ToDoItem } from './../models/todo-item.model';

export enum ToDoActionTypes {
  ADD_TODO_ITEM = '[TODO] Add item',
  ADD_TODO_ITEM_SUCCESS = '[TODO] Add item success',
  ADD_TODO_ITEM_FALURE = '[TODO] Add item falure',
  DETETE_TODO_ITEM = '[TODO] Delete item',
  DETETE_TODO_ITEM_SUCCESS = '[TODO] Delete item success',
  DETETE_TODO_ITEM_FALURE = '[TODO] Delete item falure',
}

export class AddToDoAction implements Action {
  readonly type = ToDoActionTypes.ADD_TODO_ITEM;
  constructor(public payload: ToDoItem) {}
}
export class DeletToDoAction implements Action {
  readonly type = ToDoActionTypes.DETETE_TODO_ITEM;
  constructor(public payload: string) {}
}

export type ToDoAction = AddToDoAction | DeletToDoAction;
