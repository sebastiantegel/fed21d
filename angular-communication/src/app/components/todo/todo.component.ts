import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  // Definiera en egenskap till att få sitt värde från föräldern genom property binding.
  @Input() todo: Todo = new Todo('', 0);

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.todo.done = !this.todo.done;
  }
}
