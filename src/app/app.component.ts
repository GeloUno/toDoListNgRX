import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/models/app-state.model';
import { Observable } from 'rxjs';
import { ToDoItem } from './store/models/todo-item.model';
import { AddToDoAction, DeletToDoAction } from './store/actions/todo.actions';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'to-do-list-ngrx';
  todoItems$: Observable<Array<ToDoItem>>;
  newToDoItem: ToDoItem = { id: '', name: '' };
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.todoItems$ = this.store.select((store) => store.todoing);
    // setTimeout(() => {
    //   this.AddToDo();
    // }, 2000);
  }
  addToDo() {
    this.newToDoItem.id = uuid();
    this.store.dispatch(new AddToDoAction(this.newToDoItem));
    this.newToDoItem = { id: '', name: '' };
  }
  deletToDo(id: string) {
    this.store.dispatch(new DeletToDoAction(id));
  }
}
