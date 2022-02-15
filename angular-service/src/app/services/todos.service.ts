import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private todos: Todo[] = [
    new Todo('Handla'),
    new Todo('Träna'),
    new Todo('Sova'),
  ];

  constructor() {}

  getTodos(): Todo[] {
    return this.todos;
  }
}
