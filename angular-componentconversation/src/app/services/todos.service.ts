import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private todos: Todo[] = [];
  todos$: Observable<Todo[]> = of(this.todos);

  constructor() {}

  addTodo(newTodo: Todo) {
    this.todos.push(newTodo);
  }

  removeTodo(i: number) {
    this.todos.splice(i, 1);
  }
}
