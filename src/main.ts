import { Todo } from "./models/todo";

window.onload = function() {
  let m = new Main();
  m.start();
  m.newElement();
};

class Main {
  todos: Todo[] = [];

  generateHtml(todo: Todo) {
    let divElement = document.createElement("div");

    let descrContainer = document.createElement("div");
    let descrText = document.createElement("span");

    descrText.innerHTML =
      todo.description + " " + todo.date.toLocaleTimeString();

    todo.done ? (descrText.className = "done") : (descrText.className = "");

    descrContainer.appendChild(descrText);
    divElement.appendChild(descrContainer);

    let container = document.getElementById("container") as HTMLDivElement;
    container.appendChild(divElement);

    descrText.addEventListener("click", () => {
      todo.done = !todo.done;
      this.updatedTodoList();
    });
  }

  start() {
    let firstTodo1 = new Todo(1, new Date(), "Test 1");
    let firstTodo2 = new Todo(2, new Date(), "Test 2");
    let firstTodo3 = new Todo(3, new Date(), "Test 3");

    this.todos.push(firstTodo1);
    this.todos.push(firstTodo2);
    this.todos.push(firstTodo3);

    this.todos.forEach(todo => {
      console.log(todo);
      this.generateHtml(todo);
    });
  }

  newElement() {
    let inputValue = "";
    inputValue = document.getElementById("myInput")?.nodeValue;
    let t = document.createTextNode(inputValue);

    console.log(inputValue);
  }

  updatedTodoList() {
    (document.getElementById("container") as HTMLDivElement).innerHTML = "";
    this.todos.forEach(todo => {
      console.log(todo);
      this.generateHtml(todo);
    });
  }
}
