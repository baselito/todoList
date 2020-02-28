export class Todo {
  id: number;
  date: Date;
  description: string;
  done: boolean;

  constructor(id: number, date: Date, description: string) {
    this.id = id;
    this.date = date;
    this.description = description;
    this.done = false;
  }
}
