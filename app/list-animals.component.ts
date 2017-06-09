import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Zoo } from './zoo.model';

@Component({
  selector: 'list-animals',
  template: `
  <div class="container">
    <h1>Below are the list of animals</h1>
    <div class="row">
      <div class="col-md-2 border-line">
      <h4>Select Filter</h4>
        <div class="row">
          <label>Age:</label>
          <select class="col-md-11" (change)="onChange($event.target.value)">
            <option value="all" selected="selected">All Animals</option>
            <option value="young">Young animals(less than/or 2 years of age)</option>
            <option value="mature">Mature animals(more than 2 years of age)</option>
          </select>
        </div><br>
        <div class="row">
          <label>Diet:</label>
          <select class="col-md-11" (change)="onSelectDietFilter($event.target.value)">
            <option value="all" selected="selected">All Diet</option>
            <option value="nonVeg">Eat meat</option>
            <option value="veg">Herbivorous</option>
          </select>
        </div>
      </div>
      <div class="col-md-10">
        <div *ngFor="let currentAnimal of zooAnimalList | age:filterByAge | diet:filterByDiet">
          <div class="card well">
            <div class="card-header">
              <h2>{{currentAnimal.name}}</h2>
            </div>
            <h5 class="card-title">Details</h5>
            <ul class="card-text">
              <li><b>Species: </b> {{currentAnimal.species}}</li>
              <li><b>Age: </b> {{currentAnimal.age}}</li>
              <li><b>Sex: </b> {{currentAnimal.sex}}</li>
              <li><b>Likes: </b> {{currentAnimal.likes}}</li>
              <li><b>Dislikes: </b> {{currentAnimal.dislikes}}</li>
              <li><b>Admitted Date: </b> {{currentAnimal.recordCreatedDate}}</li>
              <li><b>Care Takers Needed: </b> {{currentAnimal.careTakersNeeded}}</li>
            </ul>
            <a (click)="editAnimalButton(currentAnimal)">Edit</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
})

export class ListAnimals {

  @Input() zooAnimalList: Zoo[];
  @Output() editAnimalSender = new EventEmitter();

  filterByAge: string = "all";
  filterByDiet: string = "all";

  onChange(option){
    this.filterByAge = option;
  }

  onSelectDietFilter(option) {
    this.filterByDiet = option;
  }

  editAnimalButton(animalToEdit: Zoo) {
    console.log(animalToEdit);
    this.editAnimalSender.emit(animalToEdit);
  }
}
