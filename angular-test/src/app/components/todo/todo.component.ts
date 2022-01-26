import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  shop: Todo = new Todo('Handla');

  constructor() {}

  ngOnInit(): void {}

  toggle(): void {
    this.shop.done = !this.shop.done;
  }
}
