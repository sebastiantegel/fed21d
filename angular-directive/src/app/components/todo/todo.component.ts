import { Component, Input, OnInit } from '@angular/core';
import { IHighlightConfig } from 'src/app/models/IHighLightConfig';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo = new Todo('');
  animationSpeed: IHighlightConfig = { speed: 5, color: 'pink' };

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.todo.done = !this.todo.done;
  }
}
