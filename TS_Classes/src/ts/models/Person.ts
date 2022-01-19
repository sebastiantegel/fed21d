export class Person {
  name: string;
  age: number;
  married: boolean;

  constructor(name: string, age: number, married: boolean) {
    this.name = name; // Egenskapen name får här värdet "Sebastian"
    this.age = age; // Egenskapen age får värdet 42
    this.married = married; // Egenskapen married får värdet true
  }

  render(container: HTMLElement) {
    let heading = document.createElement("h3");
    heading.innerHTML = this.name;

    container.appendChild(heading);
  }
}
