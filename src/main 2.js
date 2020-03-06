"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todo_1 = require("./models/todo");
window.onload = function () {
    let m = new Main();
    m.start();
};
class Main {
    constructor() {
        this.todos = [];
    }
    start() {
        let firstTodo = new todo_1.Todo();
        this.todos.push(firstTodo);
        console.log(this.todos[0]);
    }
}
