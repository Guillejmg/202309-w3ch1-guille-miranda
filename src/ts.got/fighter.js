import { Character } from "./chraracter";

export class king extends Character {
  yearsofreign:number;
  constructor(name:string,family:string,age:number){
   super (name,family,age,status);
   this.yearsofreign= yearsofreign;
  }

  phrase(){
    return super.phrase('vais ha morir')
  }
}
