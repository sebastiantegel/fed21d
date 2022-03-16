export function Lists() {
  let animals: string[] = ["Majsan", "Sven", "Tweet"];
  let persons = [
    { name: "Sebastian", age: 42 },
    { name: "Hanna", age: 42 },
    { name: "Astrid", age: 11 },
    { name: "Alvar", age: 11 },
  ];

  let lis = animals.map((animal, i) => {
    return <li key={i}>{animal}</li>;
  });

  let personLis = persons.map((person) => {
    return (
      <li key={person.name}>
        <span>{person.name}: </span>
        <span>{person.age}</span>
      </li>
    );
  });

  return (
    <>
      <ul>{lis}</ul>
      <ul>{personLis}</ul>
    </>
  );
}
