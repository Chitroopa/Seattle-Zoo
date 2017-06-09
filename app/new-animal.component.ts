import { Component, Output, EventEmitter } from '@angular/core';
import { Zoo } from './zoo.model';

@Component({
  selector: 'new-animal',
  template: `
  <div class="container">
    <h1>new animal!</h1>
    <div class="row">
      <div class="col-md-8">
        <div class="form-group row">
          <div class="col-md-3">
            <label>Species</label>
          </div>
          <input #newSpecies>
        </div>
        <div class="form-group row">
          <div class="col-md-3">
            <label>Name</label>
          </div>
          <input #newName>
        </div>
        <div class="form-group row">
          <div class="col-md-3">
            <label>Age</label>
          </div>
          <input #newAge>
        </div>
        <div class="form-group row">
          <div class="col-md-3">
            <label>Diet</label>
          </div>
          <select #newDiet>
            <option value="carnivorous">Carnivorous</option>
            <option value="herbivorous">Herbivorous</option>
            <option value="omnivorous">Omnivorous</option>
          </select>
        </div>
        <div class="form-group row">
          <div class="col-md-3">
            <label>Location</label>
          </div>
          <input #newLocation>
        </div>
        <div class="form-group row">
          <div class="col-md-3">
            <label>Sex</label>
          </div>
          <select #newSex>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div class="form-group row">
          <div class="col-md-3">
            <label>Likes</label>
          </div>
          <input #newLikes>
        </div>
        <div class="form-group row">
          <div class="col-md-3">
            <label>Dislikes</label>
          </div>
          <input #newDislikes>
        </div>
        <div class="form-group row">
          <div class="col-md-3">
            <label>No. of Care Takers Needed</label>
          </div>
          <input #newCareTakersNeeded>
        </div>
        <button (click)="submitForm(newSpecies.value,newName.value,newAge.value,newDiet.value,newLocation.value,newSex.value,newLikes.value,newDislikes.value,newCareTakersNeeded.value); newSpecies.value='';newName.value='';newAge.value='';newLocation.value='';newLikes.value='';newDislikes.value='';newCareTakersNeeded.value='';" class="btn bg-primary">Save</button>
      </div>
    </div>
  </div>
  `
})

export class NewAnimal {
  @Output() newAnimal = new EventEmitter();

  submitForm(species: string,name: string, age: number, diet: string, location: string, sex: string, likes: string, dislikes: string, careTakersNeeded: number){
    var newAnimalToAdd: Zoo = new Zoo(species,name, age, diet, location, sex, likes, dislikes, careTakersNeeded);
    console.log(newAnimalToAdd);
    this.newAnimal.emit(newAnimalToAdd);
  }

}
