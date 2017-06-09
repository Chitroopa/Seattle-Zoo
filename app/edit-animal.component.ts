import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Zoo } from './zoo.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div class="container">
    <div *ngIf='animalToEdit'>
      <h1>Edit deatils of {{animalToEdit.name}}</h1>
      <div class="form-group row">
        <div class="col-md-3">
          <label>Species</label>
        </div>
        <input [(ngModel)]="animalToEdit.species">
      </div>
      <div class="form-group row">
        <div class="col-md-3">
          <label>Name</label>
        </div>
        <input [(ngModel)]="animalToEdit.name">
      </div>
      <div class="form-group row">
        <div class="col-md-3">
          <label>Age</label>
        </div>
        <input [(ngModel)]="animalToEdit.age">
      </div>
      <div class="form-group row">
        <div class="col-md-3">
          <label>Diet</label>
        </div>
        <select [(ngModel)]="animalToEdit.diet">
          <option value="carnivorous">Carnivorous</option>
          <option value="herbivorous">Herbivorous</option>
          <option value="omnivorous">Omnivorous</option>
        </select>
      </div>
      <div class="form-group row">
        <div class="col-md-3">
          <label>Location</label>
        </div>
        <input [(ngModel)]="animalToEdit.location">
      </div>
      <div class="form-group row">
        <div class="col-md-3">
          <label>Sex</label>
        </div>
        <select [(ngModel)]="animalToEdit.sex">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div class="form-group row">
        <div class="col-md-3">
          <label>Likes</label>
        </div>
        <input [(ngModel)]="animalToEdit.likes">
      </div>
      <div class="form-group row">
        <div class="col-md-3">
          <label>Dislikes</label>
        </div>
        <input [(ngModel)]="animalToEdit.dislikes">
      </div>
      <div class="form-group row">
        <div class="col-md-3">
          <label>No. of Care Takers Needed</label>
        </div>
        <input [(ngModel)]="animalToEdit.careTakersNeeded">
      </div>
      <button (click)='doneButtonClicked()'>Save</button>
    </div>
  </div>
  `
})

export class EditAnimal {

  @Input() animalToEdit: Zoo[];
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
