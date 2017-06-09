import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { NewAnimal }   from './new-animal.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [ AppComponent, NewAnimal ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
