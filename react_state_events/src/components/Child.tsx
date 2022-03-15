import { IPerson } from "../models/IPerson";

interface IChildProps {
  person: IPerson;
}

export function Child(props: IChildProps) {
  return (
    <>
      <h3>{props.person.name}</h3>
      <p>{props.person.age}</p>
    </>
  );
}
