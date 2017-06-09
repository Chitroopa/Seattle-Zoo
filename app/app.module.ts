import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { NewAnimal }   from './new-animal.component';
import { ListAnimals }   from './list-animals.component';
import { EditAnimal }   from './edit-animal.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [ AppComponent, NewAnimal, ListAnimals, EditAnimal],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
