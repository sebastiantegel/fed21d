import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.scss'],
})
export class AddtodoComponent implements OnInit {
  // Definierar en egenskap som en kommunikationskanal till en förälder
  // Denna kommunikationskanal heter saveTodo, vilket gör att det i föräldern går att använda (saveTodo)
  // new EventEmitter<string>() berättar att vår kommunikationskanal skall skicka med en text när varje händelse sker
  @Output() saveTodo = new EventEmitter<string>();
  newTodo: string = '';

  constructor() {}

  ngOnInit(): void {}

  handleChange(todoText: string) {
    this.newTodo = todoText;
  }

  save() {
    // När klickhändelsen från knappen inträffar, starta vår egna händelse saveTodo och skicka med texten newTodo
    this.saveTodo.emit(this.newTodo);
  }
}
