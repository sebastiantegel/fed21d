export class Person {
  name: string;
  isMarried: boolean;
  age: number;

  constructor(name: string, age: number, married: boolean) {
    this.name = name;
    this.age = age;
    this.isMarried = married;
  }
}
