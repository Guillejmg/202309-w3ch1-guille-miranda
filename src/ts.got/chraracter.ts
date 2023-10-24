export class Character {
  name: string;
  family: string;
  age: number;
  status: boolean;

  constructor(name: string, family: string, age: number, status: boolean) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.status = status;
  }

  phrase(value: string) {
    return value;
  }

  dead() {
    this.status = false;
  }
}
