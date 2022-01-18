window.onload = function () {
  let name: string = "Sebastian";
  let age: number = 40;
  let isMarried: boolean = true;

  console.log(name);
  console.log(isMarried);

  let sum = add(10, 20);
  console.log("Summan blev", sum);

  let person: IPerson = {
    name: "Sebastian",
    age: 42,
    married: true,
  };

  let wife: IPerson = {
    name: "Hanna",
    age: 41,
    married: true,
  };

  let daugther: IPerson = {
    name: "Astrid",
    age: 11,
    married: false,
  };

  let numbers: number[] = [1, 1, 2, 3, 5, 8, 13, 21];
  let persons: IPerson[] = [person, wife, daugther];

  for (let i = 0; i < persons.length; i++) {
    let container = document.createElement("div");
    let heading = document.createElement("h3");
    let span = document.createElement("span");

    heading.innerHTML = persons[i].name;
    span.innerHTML = persons[i].age.toString();

    container.appendChild(heading);
    container.appendChild(span);

    document.body.appendChild(container);
  }
};

function add(x: number, y: number): number {
  return x + y;
}

interface IPerson {
  name: string;
  age: number;
  married: boolean;
}
