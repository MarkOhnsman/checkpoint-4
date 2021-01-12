import { ProxyState } from "../AppState.js";
import Todo from "../models/Todo.js";
import { api } from "../Services/AxiosService.js";

let url = 'jordan/todos/'

class TodoService {
  async getTodos() {
    let res = await api.get(url);
    ProxyState.todos = res.data.map(s => new Todo(s))
    console.log(ProxyState.todos)
  }

  async addTodo(todo) {
    await api.post(url, todo);
    // ProxyState.todos = [...ProxyState.todos, new Todo(res.data)]
    this.getTodos()
  }

  async toggleTodoStatus(todoId) {
    let todo = ProxyState.todos.find(todo => todo.id == todoId);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)
    if (todo.checkbox == true) {
      todo.checkbox = false
    } else (todo.checkbox == false); {
      todo.checkbox = true
    }

    await api.put(url + todoId);
    //TODO how do you trigger this change
  }

  async removeTodo(todoId) {
    let res = await api.delete(url + todoId)
    console.log(res)
    //TODO Work through this one on your own
    //		what is the request type
    ProxyState.todos = ProxyState.todos.filter(s => s.id != todoId)
    //		once the response comes back, how do you update the state
  }
}

const todoService = new TodoService();
export default todoService;