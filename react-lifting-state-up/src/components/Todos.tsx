import { useState } from "react";
import { Todo } from "../models/Todo";
import { AddTodo } from "./AddTodo";
import { PrintTodo } from "./PrintTodo";

export const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo("Handla"),
    new Todo("Träna"),
  ]);

  const toggle = (todoToToggle: Todo) => {
    // let myTodos = todos;
    // for (let i = 0; i < myTodos.length; i++) {
    //   if (myTodos[i].text === todoToToggle.text) {
    //     myTodos[i].done = !myTodos[i].done;
    //   }
    // }
    todoToToggle.done = !todoToToggle.done;

    setTodos([...todos]);
  };

  const save = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  let printHtml = todos.map((todo: Todo, i: number) => {
    return <PrintTodo key={i} todo={todo} toggleTodo={toggle} />;
  });

  return (
    <>
      <AddTodo saveTodo={save}></AddTodo>
      {printHtml}
    </>
  );
};
