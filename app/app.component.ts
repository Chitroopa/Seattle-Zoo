import { Component } from '@angular/core';
import { Zoo } from './zoo.model';

@Component({
  selector: 'my-app',
  template: `
  <nav class="navbar navbar-inverse">
    <div class="container">
      <div class="navbar-header">
        <div class="header-line"></div>
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand">Seattle Zoo Tracker</a>
      </div>
      <div id="navbar" class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li class="active"><a>Home</a></li>
          <li><a href=#>About</a></li>
          <li><a href=#>Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container">
    <div class="jumbotron">
      <h1>Seattle Zoo Tracker</h1>
    </div>
    <button class="btn btn-primary" (click)="addNewAnimalButtonClicked()">Add New Animal</button>
    <new-animal [addNewAnimal]="addNewAnimal" (newAnimal)="newAnimal($event)"></new-animal>
    <list-animals [zooAnimalList]="zooAnimals" (editAnimalSender)="editAnimal($event)" ></list-animals>
    <edit-animal [animalToEdit]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
  </div>
  `
})

export class AppComponent {

  selectedAnimal = null;
  addNewAnimal = null;

  zooAnimals: Zoo[] = [
    new Zoo('Arctic Fox', 'Moon', 2, 'carnivorous', 'Northern Trail', 'Female', 'Cool shade', 'Loud noises', 5),
    new Zoo('Ocelot', 'Prince', 4, 'carnivorous', 'Tropical Rain Forest Building', 'Male', 'Laying in the sunshine', 'Toys that are not rope-based', 6),
    new Zoo('Northwest Black Tailed Deer', 'Tinkerbell', 8, 'herbivorous', 'Northern Trail', 'Female', 'Delicate roots and leaves', 'Loud noises', 2)
  ];

  newAnimal(newAnimalToAdd) {
    this.zooAnimals.push(newAnimalToAdd);
    this.addNewAnimal = null;
    console.log(this.zooAnimals);
  }

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addNewAnimalButtonClicked() {
    this.addNewAnimal = "true";
  }

}
