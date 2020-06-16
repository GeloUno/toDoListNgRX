import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import {
  LoadToDoAction,
  ToDoActionTypes,
  LoadToDoSuccessAction,
} from '../actions/todo.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { TodoService } from './../../services/todo.service';
import { LoadToDoFalureAction } from './../actions/todo.actions';
import { of } from 'rxjs';
import { DeleteToDoFalureAction } from '../actions/todo.actions';
import {
  DeleteToDoAction,
  DeleteToDoSuccessAction,
} from '../actions/todo.actions';
import {
  AddToDoAction,
  AddToDoSuccessAction,
  AddToDoFalureAction,
} from '../actions/todo.actions';

@Injectable()
export class TodoingEffects {
  @Effect() loadToDoItems = this.action$.pipe(
    ofType<LoadToDoAction>(ToDoActionTypes.LOAD_TODO_ITEM),
    mergeMap(() =>
      this.todoHttpService.getToDoItems().pipe(
        map((data) => new LoadToDoSuccessAction(data)),
        catchError((err) => of(new LoadToDoFalureAction(err)))
      )
    )
  );

  @Effect() addToDoItem = this.action$.pipe(
    ofType<AddToDoAction>(ToDoActionTypes.ADD_TODO_ITEM),
    mergeMap((data) =>
      this.todoHttpService.addToDoItem(data.payload).pipe(
        map(() => new AddToDoSuccessAction(data.payload)),
        catchError((err) => of(new AddToDoFalureAction(err)))
      )
    )
  );

  @Effect() deleteToDoItem = this.action$.pipe(
    ofType<DeleteToDoAction>(ToDoActionTypes.DELETE_TODO_ITEM),
    mergeMap((data) =>
      this.todoHttpService.deleteToDoItem(data.payload).pipe(
        map(() => new DeleteToDoSuccessAction(data.payload)),
        catchError((err) => of(new DeleteToDoFalureAction(err)))
      )
    )
  );

  constructor(private action$: Actions, private todoHttpService: TodoService) {}
}
