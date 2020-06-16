import { ToDoItem } from './todo-item.model';

export interface ToDoItemState {
  list: ToDoItem[];
  connecting: boolean;
  error: Error;
}
