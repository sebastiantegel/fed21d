import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  shop: Todo = new Todo('Handla');

  todos: Todo[] = [new Todo('Handla'), new Todo('Träna'), new Todo('Sova')];
  todoClass: string = 'todo';

  imageUrl: string = 'someRandomUrl';

  isDisabled: boolean = false;

  firstname: string = '';

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.isDisabled = !this.isDisabled;
  }

  toggleTodo(i: number) {
    this.todos[i].done = !this.todos[i].done;
  }

  toggleTodoObject(todoToToggle: Todo) {
    todoToToggle.done = !todoToToggle.done;
  }

  handleChange(someValue: string) {
    this.firstname = someValue;
  }

  search() {
    console.log(this.firstname);

    this.todos.push(new Todo(this.firstname));
  }
}
