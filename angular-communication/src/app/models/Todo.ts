export class Todo {
  text: string;
  done: boolean;
  created: Date;
  id: number;

  constructor(newTodo: string, id: number) {
    this.text = newTodo;
    this.done = false;
    this.created = new Date();
    this.id = id;
  }
}
