import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddAnimalComponent } from './components/add-animal/add-animal.component';

@NgModule({
  declarations: [AppComponent, AddUserComponent, AddAnimalComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
