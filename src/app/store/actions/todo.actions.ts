import { Action } from '@ngrx/store';
import { ToDoItem } from './../models/todo-item.model';

export enum ToDoActionTypes {
  LOAD_TODO_ITEM = '[TODO] Loading item',
  LOAD_TODO_SUCCESS = '[TODO] Load item SUCCESS',
  LOAD_TODO_FALURE = '[TODO] Load item FALURE',

  ADD_TODO_ITEM = '[TODO] Add item',
  ADD_TODO_SUCCESS = '[TODO] Add item SUCCESS',
  ADD_TODO_FALURE = '[TODO] Add item FALURE',

  DELETE_TODO_ITEM = '[TODO] Delete item',
  DELETE_TODO_SUCCESS = '[TODO] Delete item SUCCESS',
  DELETE_TODO_FALURE = '[TODO] Deleting item FALURE',
}

export class AddToDoAction implements Action {
  readonly type = ToDoActionTypes.ADD_TODO_ITEM;
  constructor(public payload: ToDoItem) {}
}
export class AddToDoSuccessAction implements Action {
  readonly type = ToDoActionTypes.ADD_TODO_SUCCESS;
  constructor(public payload: ToDoItem) {}
}
export class AddToDoFalureAction implements Action {
  readonly type = ToDoActionTypes.ADD_TODO_FALURE;
  constructor(public payload: Error) {}
}

export class LoadToDoAction implements Action {
  readonly type = ToDoActionTypes.LOAD_TODO_ITEM;
  // constructor(public payload: ToDoItem) {}
}
export class LoadToDoSuccessAction implements Action {
  readonly type = ToDoActionTypes.LOAD_TODO_SUCCESS;
  constructor(public payload: Array<ToDoItem>) {}
}
export class LoadToDoFalureAction implements Action {
  readonly type = ToDoActionTypes.LOAD_TODO_FALURE;
  constructor(public payload: Error) {}
}

export class DeleteToDoAction implements Action {
  readonly type = ToDoActionTypes.DELETE_TODO_ITEM;
  constructor(public payload: string) {}
}
export class DeleteToDoSuccessAction implements Action {
  readonly type = ToDoActionTypes.DELETE_TODO_SUCCESS;
  constructor(public payload: string) {}
}
export class DeleteToDoFalureAction implements Action {
  readonly type = ToDoActionTypes.DELETE_TODO_FALURE;
  constructor(public payload: Error) {}
}

export type ToDoAction =
  | AddToDoAction
  | AddToDoSuccessAction
  | AddToDoFalureAction
  | LoadToDoAction
  | LoadToDoSuccessAction
  | LoadToDoFalureAction
  | DeleteToDoAction
  | DeleteToDoSuccessAction
  | DeleteToDoFalureAction;
