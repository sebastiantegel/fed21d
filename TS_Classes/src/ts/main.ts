import { Person } from "./models/Person";

window.onload = function () {
  // Skapa ett objekt p av typen Person
  let p = new Person("Sebastian", 42, true);
  let p2 = new Person("Hanna", 41, true);
  let p3 = new Person("Alvar", 11, false);
  let p4 = new Person("Astrid", 11, false);

  // Skriv ut
  console.log(p);

  // Skriv ut i html
  p.render(document.body);
  p2.render(document.body);
  p3.render(document.body);
  p4.render(document.body);
};
