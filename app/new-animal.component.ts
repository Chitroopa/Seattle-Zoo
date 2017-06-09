import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Zoo } from './zoo.model';

@Component({
  selector: 'new-animal',
  template: `
  <div class="container">
    <br><br>
    <div class="well input-style" *ngIf="addNewAnimal">
      <h1>Add New animal!</h1>
      <div class="form-group">
        <label>Species</label>
        <input class="form-control" #newSpecies>
      </div>
      <div class="form-group">
        <label>Name</label>
        <input class="form-control" #newName>
      </div>
      <div class="form-group">
        <label>Age</label>
        <input class="form-control" #newAge>
      </div>
      <div class="form-group">
        <label>Diet</label><br>
        <select #newDiet>
          <option value="carnivorous">Carnivorous</option>
          <option value="herbivorous">Herbivorous</option>
          <option value="omnivorous">Omnivorous</option>
        </select>
      </div>
      <div class="form-group">
        <label>Location</label>
        <input class="form-control" #newLocation>
      </div>
      <div class="form-group">
        <label>Sex</label><br>
        <select #newSex>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div class="form-group">
        <label>Likes</label>
        <input class="form-control" #newLikes>
      </div>
      <div class="form-group">
        <label>Dislikes</label>
        <input class="form-control" #newDislikes>
      </div>
      <div class="form-group">
        <label>No. of Care Takers Needed</label>
        <input class="form-control" #newCareTakersNeeded>
      </div>
      <button (click)="submitForm(newSpecies.value,newName.value,newAge.value,newDiet.value,newLocation.value,newSex.value,newLikes.value,newDislikes.value,newCareTakersNeeded.value); newSpecies.value='';newName.value='';newAge.value='';newLocation.value='';newLikes.value='';newDislikes.value='';newCareTakersNeeded.value='';" class="btn bg-primary">Save</button>
    </div>
  </div>
  `
})

export class NewAnimal {
  @Input() addNewAnimal: string;
  @Output() newAnimal = new EventEmitter();

  submitForm(species: string,name: string, age: number, diet: string, location: string, sex: string, likes: string, dislikes: string, careTakersNeeded: number){
    var newAnimalToAdd: Zoo = new Zoo(species,name, age, diet, location, sex, likes, dislikes, careTakersNeeded);
    console.log(newAnimalToAdd);
    this.newAnimal.emit(newAnimalToAdd);
  }

}
