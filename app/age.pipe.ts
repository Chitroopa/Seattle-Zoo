import {Pipe, PipeTransform} from '@angular/core';
import {Zoo} from './zoo.model';

@Pipe({
  name: "age",
  pure: false
})

export class AgePipe implements PipeTransform {
  transform(input: Zoo[], ageFilter)
  {
    var output: Zoo[] = [];
    if(ageFilter === "young")
    {
      for (var i = 0; i< input.length; i++)
      {
        if (input[i].age <= 2)
        {
          output.push(input[i]);
        }
      }
      return output;
    }
    else if(ageFilter === "mature")
    {
      for (var i = 0; i< input.length; i++)
      {
        if (input[i].age > 2)
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
