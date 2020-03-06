export class Todo {
  date: Date;
  description: string;
  done: boolean;

  constructor(date: Date, description: string) {
    this.date = date;
    this.description = description;
    this.done = false;
  }
}
