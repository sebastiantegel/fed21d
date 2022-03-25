import styled from "styled-components";
import { Todo } from "../models/Todo";

interface IPrintTodoProps {
  todo: Todo;
  toggleTodo(todo: Todo): void;
}

const DoneTodo = styled.div`
  text-decoration: line-through;
`;

const NotDoneTodo = styled.div``;

export const PrintTodo = (props: IPrintTodoProps) => {
  const handleClick = () => {
    props.toggleTodo(props.todo);
  };

  return (
    <>
      {props.todo.done ? (
        <DoneTodo onClick={handleClick}>{props.todo.text}</DoneTodo>
      ) : (
        <NotDoneTodo onClick={handleClick}>{props.todo.text}</NotDoneTodo>
      )}
    </>
  );
};
