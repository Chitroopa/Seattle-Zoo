import { Component } from '@angular/core';
import { Zoo } from './zoo.model';

@Component({
  selector: 'my-app',
  template: `
  <nav class="navbar navbar-default">
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
    <h1>Seattle Zoo Tracker</h1>
    <new-animal (newAnimal)="newAnimal($event)"></new-animal>
  </div>
  `
})

export class AppComponent {

  zooAnimals: Zoo[] = [
    new Zoo('Arctic Fox', 'Moon', 2, 'carnivorous', 'Northern Trail', 'Female', 'Cool shade', 'Loud noises', 5),
    new Zoo('Ocelot', 'Prince', 4, 'carnivorous', 'Tropical Rain Forest Building', 'Male', 'Laying in the sunshine', 'Toys that are not rope-based', 6),
    new Zoo('Northwest Black Tailed Deer', 'Tinkerbell', 8, 'herbivorous', 'Northern Trail', 'Female', 'Delicate roots and leaves', 'Loud noises', 2)
  ];

  newAnimal(newAnimalToAdd) {
    this.zooAnimals.push(newAnimalToAdd);
    console.log(this.zooAnimals);
  }

}
