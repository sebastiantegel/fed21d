import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor() {}

  ngOnInit(): void {}

  create(todoText: string) {
    this.todos.push(new Todo(todoText));
  }
}
