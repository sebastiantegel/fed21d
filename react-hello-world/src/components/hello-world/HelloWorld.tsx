import "./HelloWorld.css";

interface IHelloWordProps {
  name: string;
  age: number;
}

export function HelloWorld(props: IHelloWordProps) {
  return <div className="header">Hello World - {props.name}</div>;
}
