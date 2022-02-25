import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { AnimalComponent } from './components/animal/animal.component';

@NgModule({
  declarations: [AppComponent, AnimalsComponent, AnimalComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
