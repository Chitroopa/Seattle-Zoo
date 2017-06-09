import {Pipe, PipeTransform} from '@angular/core';
import {Zoo} from './zoo.model';

@Pipe({
  name: "diet",
  pure: false
})

export class DietPipe implements PipeTransform {
  transform(input: Zoo[], dietFilter)
  {
    var output: Zoo[] = [];
    if(dietFilter === "nonVeg")
    {
      for (var i = 0; i< input.length; i++)
      {
        if (input[i].diet === "carnivorous" || input[i].diet === "omnivorous")
        {
          output.push(input[i]);
        }
      }
      return output;
    }
    else if(dietFilter === "veg")
    {
      for (var i = 0; i< input.length; i++)
      {
        if (input[i].diet === "herbivorous")
        {
          output.push(input[i]);
        }
      }
      return output;
    }
    else
    {
      return input;
    }
  }
}
