import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo = new Todo('');
  animationSpeed: number = 5;

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.todo.done = !this.todo.done;
  }
}
