import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.scss'],
})
export class AddtodoComponent implements OnInit {
  @Output() saveTodo = new EventEmitter<string>();
  todoText: string = '';

  constructor() {}

  ngOnInit(): void {}

  handleChange(todo: string) {
    this.todoText = todo;
  }

  save() {
    this.saveTodo.emit(this.todoText);
  }
}
