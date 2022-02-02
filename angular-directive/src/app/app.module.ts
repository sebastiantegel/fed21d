import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoComponent } from './components/todo/todo.component';
import { AddtodoComponent } from './components/addtodo/addtodo.component';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [AppComponent, TodosComponent, TodoComponent, AddtodoComponent, HighlightDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
