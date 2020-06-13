import { ToDoItem } from './todo-item.model';

export interface AppState {
  readonly todoing: Array<ToDoItem>;
}
