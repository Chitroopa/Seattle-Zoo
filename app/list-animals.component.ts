import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Zoo } from './zoo.model';

@Component({
  selector: 'list-animals',
  template: `
  <div class="container">
    <h1>List</h1>
    <div *ngFor="let currentAnimal of zooAnimalList">
      <div class="card well">
        <div class="card-header">
          <h2>{{currentAnimal.name}}</h2>
        </div>
        <h4 class="card-title">Details</h4>
        <ul class="card-text">
          <li><b>Species: </b> {{currentAnimal.species}}</li>
          <li><b>Age: </b> {{currentAnimal.age}}</li>
          <li><b>Sex: </b> {{currentAnimal.sex}}</li>
          <li><b>Likes: </b> {{currentAnimal.likes}}</li>
          <li><b>Dislikes: </b> {{currentAnimal.dislikes}}</li>
          <li><b>Care Takers Needed: </b> {{currentAnimal.careTakersNeeded}}</li>
        </ul>
        <a (click)="editAnimalButton(currentAnimal)">Edit</a>
      </div>
    </div>
  </div>
  `
})

export class ListAnimals {

  @Input() zooAnimalList: Zoo[];
  @Output() editAnimalSender = new EventEmitter();

  editAnimalButton(animalToEdit: Zoo) {
    console.log(animalToEdit);
    this.editAnimalSender.emit(animalToEdit);
  }
}