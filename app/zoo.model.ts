export class Zoo {
  public recordCreatedDate: Date = new Date;
  constructor(public species: string,public name: string, public age: number, public diet: string, public location: string, public sex: string, public likes: string, public dislikes: string, public careTakersNeeded: number) { }
}
