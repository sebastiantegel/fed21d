import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  // Definiera vår lista och skapa upp två stycken test-objekt
  todos: Todo[] = [new Todo('Handla', 1), new Todo('Träna', 2)];

  constructor() {}

  ngOnInit(): void {}

  // Funktion som körs när händelsen från addTodo-komponenten inträffar.
  // Kommer att lägga till ett nytt objekt i listan todos.
  create(todoText: string) {
    this.todos.push(new Todo(todoText, 10));
  }
}
