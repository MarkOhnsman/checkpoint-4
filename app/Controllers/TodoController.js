import { ProxyState } from "../AppState.js";
import todoService from "../Services/TodoService.js";

//TODO Create the draw function
function _drawTodos() {
  let template = ''
  ProxyState.todos.forEach(todo => {
    template += `<li class="action" onclick="app.todoController.getTodos('${todo.id}')">${todo.title}</li>`
  })
  document.getElementById('listItems').innerHTML = template
}

export default class TodoController {
  constructor() {
    ProxyState.on('todos', _drawTodos)

    todoService.getTodos();
  }

  getTodos() {
    try {
      todoService.getTodos()
    } catch (error) {
      console.error(error)
    }
  }
  addTodo() {
    window.event.preventDefault()
    // e.preventDefault();
    let form = window.event.target
    //TODO build the todo object from the data that comes into this method
    let todo = {
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