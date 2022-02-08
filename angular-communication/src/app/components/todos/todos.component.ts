import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  // Definiera vår lista.
  todos: Todo[] = [];

  constructor() {}

  ngOnInit(): void {
    let todosString: string = localStorage.getItem('todos') || '[]';
    this.todos = JSON.parse(todosString);
  }

  // Funktion som körs när händelsen från addTodo-komponenten inträffar.
  // Kommer att lägga till ett nytt objekt i listan todos.
  create(todoText: string) {
    this.todos.push(new Todo(todoText, 10));
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
