import { ProxyState } from "../AppState.js";
import todoService from "../Services/TodoService.js";

//TODO Create the draw function
function _drawTodos() {
  console.log("THE DAILY todos IS: ", ProxyState.todos);
  let template = ""
  ProxyState.todos.forEach(p => template += p.Template)
  document.getElementById("listItems").innerHTML = template
}

export default class TodoController {
  constructor() {
    ProxyState.on('todos', _drawTodos)
    this.getTodos();
  }

  getTodos() {
    console.log("Calling 'getTodos' the 1st time in the Controller")
    try {
      todoService.getTodos()
    } catch (error) {
      console.error(error)
    }
  }
  addTodo() {
    window.event.preventDefault()
    let form = window.event.target
    //TODO build the todo object from the data that comes into this method
    let todo = {
      // @ts-ignore
      title: form.title.value
    };

    try {
      todoService.addTodo(todo);
    } catch (error) {
      console.error(error)
    }
  }

  /**
 * This method takes in an id of the Todo that should be togggled as complete
 * @param {string} todoId 
 */
  toggleTodoStatus(todoId) {
    try {
      todoService.toggleTodoStatus(todoId);
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * This method takes in an id of the Todo that should be removed
   * @param {string} todoId 
   */
  removeTodo(todoId) {
    try {
      todoService.removeTodo(todoId);
    } catch (error) {
      console.error(error)
    }
  }
}