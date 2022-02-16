export class Todo {
  text: string;
  done: boolean;
  created: Date;

  constructor(newTodo: string) {
    this.text = newTodo;
    this.done = false;
    this.created = new Date();
  }
}
