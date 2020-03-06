import { Todo } from "./models/todo";

window.onload = function() {
  let m = new Main();
  m.start();
};

class Main {
  todos: Todo[] = [];

  constructor() {
    this.newElement = this.newElement.bind(this);
    this.swapArrayElements = this.swapArrayElements.bind(this);
  }

  generateHtml(todo: Todo) {
    let allTodos = document.createElement("div");
    let todoText = document.createElement("div");
    let todoButtons = document.createElement("div");
    let arrowUp = document.createElement("div");
    let arrowDown = document.createElement("div");
    let deleteBtn = document.createElement("div");

    todoButtons.appendChild(arrowUp);
    todoButtons.appendChild(arrowDown);
    allTodos.appendChild(todoText);
    allTodos.appendChild(todoButtons);
    todoButtons.appendChild(deleteBtn);

    allTodos.className = "allTodos";
    todoButtons.className = "arrowContainer";
    arrowUp.className = "fas fa-arrow-circle-up arrows";
    arrowDown.className = "fas fa-arrow-circle-down arrows";
    deleteBtn.className = "fas fa-trash-alt delete";

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
    arrowUp.addEventListener("click", () => {
      this.swapArrayElements(
        this.todos,
        this.todos.indexOf(todo),
        this.todos.indexOf(todo) - 1
      );
      this.updatedTodoList();
    });
    arrowDown.addEventListener("click", () => {
      this.swapArrayElements(
        this.todos,
        this.todos.indexOf(todo),
        this.todos.indexOf(todo) + 1
      );
      this.updatedTodoList();
    });
    deleteBtn.addEventListener("click", () => {
      this.todos.splice(this.todos.indexOf(todo), 1);
      this.updatedTodoList();
    });
  }

  start() {
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
      let myTodo = new Todo(new Date(), newValue);

      this.todos.push(myTodo);
      this.updatedTodoList();
    }
  }

  swapArrayElements(arr: Todo[], indexA: number, indexB: number) {
    if (
      (indexA > indexB && indexA > 0) ||
      (indexA < indexB && indexA < arr.length - 1)
    ) {
      let temp = arr[indexA];
      arr[indexA] = arr[indexB];
      arr[indexB] = temp;
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
