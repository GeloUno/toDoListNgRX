import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { delay } from 'rxjs/operators'; // FIXME: remove this line in real server
import { ToDoItem } from './../store/models/todo-item.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  // json-server read form db.json
  private TODO_URL = 'http://localhost:3000/todo';
  constructor(private http: HttpClient) {}

  getToDoItems() {
    return this.http.get<ToDoItem[]>(this.TODO_URL).pipe(delay(600));
    // FIXME: remove pipe delay if connect to global server
  }
  addToDoItem(toDoItem: ToDoItem) {
    return this.http.post(this.TODO_URL, toDoItem).pipe(delay(600));
    // FIXME: remove pipe delay if connect to global server
  }
  deleteToDoItem(id: string) {
    return this.http.delete(`${this.TODO_URL}/${id}`).pipe(delay(600));
    // FIXME: remove pipe delay if connect to global server
  }
}
