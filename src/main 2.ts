import { Todo } from "./models/todo";

window.onload = function() {
  let m = new Main();
  m.start();
};

class Main {
  todos: Todo[] = [];

  constructor() {
    this.newElement = this.newElement.bind(this);
  }

  generateHtml(todo: Todo) {
    let allTodos = document.createElement("div");
    let todoText = document.createElement("div");
    allTodos.appendChild(todoText);

    todoText.innerHTML =
      todo.description + " " + todo.date.toLocaleTimeString();

    if (todo.done == true) {
      todoText.className = "done";
      let container = document.getElementById("doneDiv") as HTMLDivElement;
      container.appendChild(allTodos);
    } else {
      todoText.className = "notdone";
      let container = document.getElementById("todoDiv") as HTMLDivElement;
      container.appendChild(allTodos);
    }

    todoText.addEventListener("click", () => {
      todo.done = !todo.done;
      this.updatedTodoList();
    });
  }

  start() {
    // let firstTodo1 = new Todo(1, new Date(), "Test 1");
    // let firstTodo2 = new Todo(2, new Date(), "Test 2");
    // let firstTodo3 = new Todo(3, new Date(), "Test 3");

    // this.todos.push(firstTodo1);
    // this.todos.push(firstTodo2);
    // this.todos.push(firstTodo3);

    this.todos.forEach(todo => {
      console.log(todo);
      this.generateHtml(todo);
    });

    let input = document.getElementById("addBtn");
    if (input !== null) {
      input.addEventListener("click", this.newElement);
    }
  }

  newElement() {
    let input = document.getElementById("myInput") as HTMLInputElement;
    if (input !== null) {
      let newValue = input.value;
      let myTodo = new Todo(this.todos.length + 1, new Date(), newValue);

      this.todos.push(myTodo);
      this.updatedTodoList();
    }
  }

  updatedTodoList() {
    (document.getElementById("todoDiv") as HTMLDivElement).innerHTML = "";
    (document.getElementById("doneDiv") as HTMLDivElement).innerHTML = "";
    this.todos.forEach(todo => {
      console.log(todo);
      this.generateHtml(todo);
    });
  }
}
