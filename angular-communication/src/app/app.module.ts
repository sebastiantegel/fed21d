import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodosComponent } from './components/todos/todos.component';
import { AddtodoComponent } from './components/addtodo/addtodo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodosComponent,
    AddtodoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
