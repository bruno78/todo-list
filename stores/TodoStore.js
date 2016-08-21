import { EventEmitter } from "events";

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [
      {
        id: 113464613,
        text: "Go Shopoping",
        complete: false
      },
      {
        id: 235684679,
        text: "Pay Water Bill",
        complete: false
      },
    ];
  }

  createTodo(text) {
    const id = Date.now();

    this.todos.push({
      id,
      text,
      complete: false,
    });

    this.emit("change");
  }
  getAll() {
    return this.todos;
  }
}

const todoStore = new TodoStore;
window.todoStore = todoStore; // This exposes todoStore globally where you can expose it and test on the console
export default todoStore;
