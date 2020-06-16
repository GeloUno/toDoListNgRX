// import { ToDoItem } from './todo-item.model';
import { ToDoItemState } from './todo-item-state.model';

export interface AppState {
  readonly todoing: ToDoItemState;
}
