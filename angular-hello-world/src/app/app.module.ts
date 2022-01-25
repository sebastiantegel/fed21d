import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShowpersonComponent } from './components/showperson/showperson.component';
import { ShowpersonsComponent } from './components/showpersons/showpersons.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowpersonComponent,
    ShowpersonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
